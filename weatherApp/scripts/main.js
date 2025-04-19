const form = document.getElementById('formulario');
const input_ciudad = document.getElementById('inputciudad');
const contenedor = document.querySelector('.containerCard');
const errorMsj = document.getElementById('errorspan');
const cont = document.getElementById('resultSections');
const cont2 = document.querySelector('.containerGraficos0')

const inputVacio = () =>{
    return input_ciudad.value.trim() == '';
};
const ciudadNoValida = infoCiudad => !infoCiudad.id;


const obtenerData = (ciudad) =>{
    return{
        ciudadPais:ciudad.sys.country,
        ciudadNombre:ciudad.name,
        ciudadHumedad:ciudad.main.humidity + '%',
        ciudadTermica:Math.round(ciudad.main.feels_like) + '°',
        ciudadTemperatura:Math.round(ciudad.main.temp) + '°',
        ciudadTemperaturaMax:Math.round(ciudad.main.temp_max) + '°',
        ciudadTemperaturaMin:Math.round(ciudad.main.temp_min )+ '°',
        ciudadAmanecer:ciudad.sys.sunrise ,
        ciudadAtardecer:ciudad.sys.sunset ,
        ciudadPronActual:ciudad.weather[0].description,
        ciudadIcono:ciudad.weather[0].icon
    }
};

const rendCiudad = ciudad => {
    cont2.classList.remove('oculto')
    cont.innerHTML = templateCiudad(ciudad)
};

const buscarCiudad = async(e) =>{
    e.preventDefault()


    if (inputVacio()){
        errorMsj.classList.remove('oculto')
        return;
    };

    const fecthCiudad = await requestCiudad(input_ciudad.value);
    const fetchPronostico = await requestPronostico(input_ciudad.value);

    if(!fecthCiudad.id || fetchPronostico.id){
        errorMsj.classList.remove('oculto')
        return;
    };
    
    errorMsj.classList.add('oculto')

    rendCiudad(fecthCiudad)
    obtenerPronostico(fetchPronostico)
};


const init = () => {
    form.addEventListener('submit', buscarCiudad)
};
init()

