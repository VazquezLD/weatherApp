//Clave de la API//

const apiKey = 'ad95c0f7fa0ebb8a799f997cb3c0eb06';
const ciudad = 'Cordoba'

const requestCiudad = async(ciudad) =>{
    const respuesta = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&APPID=${apiKey}`);
    const data = await respuesta.json();
    return data
}
requestCiudad(ciudad);