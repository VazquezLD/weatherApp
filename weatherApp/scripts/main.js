/*CONSTANTES PARA OBJETOS DEL DOCUMENTO*/
const form = document.getElementById('formulario');
const input_ciudad = document.getElementById('inputciudad');
const contenedor = document.querySelector('.containerCard');
const errorMsj = document.getElementById('errorspan');
const cont = document.getElementById('resultSections');

/*VALIDAR INPUTS*/
const inputVacio = () =>{
    return input_ciudad.value.trim() == '';
};
const ciudadNoValida = infoCiudad => !infoCiudad.id;

/*DESESTRUCTURA EL OBJETO CIUDAD PARA MODIFICAR EL CONTENEDOR*/
const obtenerData = (ciudad) =>{
    return{
        ciudadPais:ciudad.sys.country,
        ciudadNombre:ciudad.name,
        ciudadHumedad:ciudad.main.humidity + '%',
        ciudadTermica:Math.round(ciudad.main.feels_like) + '°',
        ciudadTemperatura:Math.round(ciudad.main.temp) + '°',
        ciudadTemperaturaMax:Math.round(ciudad.main.temp_max) + '°',
        ciudadTemperaturaMin:Math.round(ciudad.main.temp_min )+ '°',
        ciudadAmanecer:ciudad.sys.sunrise,
        ciudadAtardecer:ciudad.sys.sunset,
        ciudadPronActual:ciudad.weather[0].description,
        ciudadIcono:ciudad.weather[0].icon
    }
};

const rendCiudad = ciudad => {
    cont.innerHTML = templateCiudad(ciudad)
};

/*MANDA LA CIUDAD A LA FUNCION DE LA API*/
const buscarCiudad = async(e) =>{
    e.preventDefault()

    if (inputVacio()){
        errorMsj.classList.remove('oculto')
        return;
    };
    const fecthCiudad = await requestCiudad(input_ciudad.value);

    if(!fecthCiudad.id){
        errorMsj.classList.remove('oculto')
        return;
    };
    console.log(obtenerData(fecthCiudad));
    errorMsj.classList.add('oculto')
    rendCiudad(fecthCiudad)
};

/*INICIALIZACIÓN*/
const init = () => {
    form.addEventListener('submit', buscarCiudad)
};
init()

