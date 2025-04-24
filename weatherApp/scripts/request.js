const apiKey = 'ad95c0f7fa0ebb8a799f997cb3c0eb06';

const requestCiudad = async(ciudad) =>{
    const respuesta = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&APPID=${apiKey}`);
    const data = await respuesta.json();
    console.log(data)
    return data
}

const requestPronostico = async(ciudad) => {
    const respuesta2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}&units=metric`);
    const data2 = await respuesta2.json();
    console.log(data2)
    return data2
}