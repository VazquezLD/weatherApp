/*CONSTANTES PARA OBJETOS DEL DOCUMENTO*/
const form = document.getElementById('formulario');
const input_ciudad = document.getElementById('inputciudad');
const contenedor = document.querySelector('.containerCard');


/*VALIDAR INPUTS*/
const inputVacio = () =>{
    return input_ciudad.value.trim() == '';
};

/*DESESTRUCTURA EL OBJETO CIUDAD PARA MODIFICAR EL CONTENEDOR*/
const obtenerData = (ciudad) =>{
    return{
        ciudadPais:ciudad.sys.country,
        ciudadNombre:ciudad.name,
        ciudadHumedad:ciudad.main.humidity + '%',
        ciudadTemperatura:ciudad.main.temp,
        ciudadTemperaturaMax:ciudad.main.temp_max,
        ciudadTemperaturaMin:ciudad.main.temp_min,
        ciudadAmanecer:ciudad.sys.sunrise,
        ciudadAtardecer:ciudad.sys.sunset,
        ciudadPron:ciudad.weather[0].main,
        ciudadPronActual:ciudad.weather[0].description,
        ciudadIcono:ciudad.weather[0].icon
    }
}

/*MANDA LA CIUDAD A LA FUNCION DE LA API*/
const buscarCiudad = async(e) =>{
    e.preventDefault()

    if (inputVacio()){
        alert('Ingresa una ciuaaadad xfa :(');
        return;
    };
    const fecthCiudad = await requestCiudad(input_ciudad.value);
    console.log(obtenerData(fecthCiudad));
};

/*INICIALIZACIÓN*/
const init = () => {
    form.addEventListener('submit', buscarCiudad)
};
init()

