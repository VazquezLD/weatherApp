const miGrafico1 = document.getElementById('miGrafico1').getContext('2d')
const miGrafico2 = document.getElementById('miGrafico2').getContext('2d')

let chart1 = null;
let chart2 = null;


const obtenerPronostico = (ciudad) => {
    if (chart1) {
        chart1.destroy()
    }
    if (chart2) {
        chart2.destroy()
    }
    
    const dias = {}
    const sens = {}
    const semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

    ciudad.list.forEach(bloque => {
        const fecha = bloque.dt_txt.split(' ')[0]
        const sensacion = bloque.main.feels_like

        if (!dias[fecha]) dias[fecha] = []
        dias[fecha].push(Math.round(bloque.main.temp_max))
        if (!sens[fecha]) sens[fecha] = []
        sens[fecha].push(Math.round(sensacion))
    });

    const etiquetasST = Object.keys(sens)
    const temperaturasST = etiquetasST.map(fecha => Math.max(...sens[fecha]))

    const etiquetas = Object.keys(dias)
    const fechaFormateada1 = etiquetas.map(fecha => fecha = new Date(fecha).getDay())
    const fechaFormateada2 = fechaFormateada1.map(fecha => fecha = semana[fecha])
    const temperaturas = etiquetas.map(fecha => Math.max(...dias[fecha]))

    chart1 = new Chart(miGrafico1, {
        type: 'bar',
        data: {
            labels: fechaFormateada2,
            datasets: [{
                label: `Máxima temperatura de los próximos días en ${ciudad.city.name}`,
                data: temperaturas,
                backgroundColor: '#243757',
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
    }
}
);

    chart2 = new Chart(miGrafico2, {
        type: 'line',
        data: {
            labels: fechaFormateada2,
            datasets: [{
                label: `Sensación Térmica de los proximos en ${ciudad.city.name}`,
                data: temperaturasST,
                backgroundColor: '#243757',
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
    }}
);  
};

