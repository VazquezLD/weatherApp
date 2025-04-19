const miGrafico1 = document.getElementById('miGrafico1').getContext('2d')


const obtenerPronostico = (ciudad) => {
    const dias = {}
    const semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

    ciudad.list.forEach(bloque => {
        const fecha = bloque.dt_txt.split(' ')[0]

        if (!dias[fecha]) dias[fecha] = []
        dias[fecha].push(Math.round(bloque.main.temp_max))
    });

    const etiquetas = Object.keys(dias)
    const fechaFormateada1 = etiquetas.map(fecha => fecha = new Date(fecha).getDay())
    const fechaFormateada2 = fechaFormateada1.map(fecha => fecha = semana[fecha])
    const temperaturas = etiquetas.map(fecha => Math.max(...dias[fecha]))

    window.miGrafico1 = new Chart(miGrafico1, {
        type: 'bar',
        data: {
            labels: fechaFormateada2,
            datasets: [{
                label: `Máxima temperatura de los próximos días en ${ciudad.city.name}`,
                data: temperaturas,
                backgroundColor: '#0044ff',
                barThickness: 50,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            scales: {
                y:{
                    ticks:{
                        callback: function(value) {
                        return value + '°C';
                    }
                }
            }
        }
    }});
    
};

