//Clave de la API//
const apiKey = 'ad95c0f7fa0ebb8a799f997cb3c0eb06';

/*UTILIZA EL PARAMETRO CIUDAD PARA BUSCARLO EN LOS DATOS DE LA API*/
const requestCiudad = async(ciudad) =>{
    const respuesta = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&APPID=${apiKey}`);
    const data = await respuesta.json();
    console.log(data);
    return data
}
