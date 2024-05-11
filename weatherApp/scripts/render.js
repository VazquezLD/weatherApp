/*FUNCION PARA PASAR A FECHA UNIX*/
function fechaUnix(segundosDesdeEpocaUnix) {
    const horas = String(Math.floor(segundosDesdeEpocaUnix / 3600)).padStart(2, '0');
    const minutos = String(Math.floor((segundosDesdeEpocaUnix % 3600) / 60)).padStart(2, '0');
    const segundos = String(segundosDesdeEpocaUnix % 60).padStart(2, '0');
    
    return `${horas}:${minutos}:${segundos}`;
  }
/*FUNCIÓN DE RENDERIZADO DE DATOS*/
const templateCiudad = ciudad =>{

    const {ciudadPais, ciudadNombre, ciudadHumedad,
         ciudadTermica, ciudadTemperatura, ciudadTemperaturaMax, 
         ciudadTemperaturaMin, ciudadAmanecer, ciudadAtardecer,
         ciudadIcono, ciudadPronActual} = obtenerData(ciudad)

    let amanecer = fechaUnix(ciudadAmanecer-1715400000)
    let atardecer = fechaUnix(ciudadAtardecer-1715400000)
    

    return `<div class="resultSection">
    <ul class="datosMain">
      <li class="datoMain">${ciudadPais}</li>
      <li class="datoMain">Ciudad: ${ciudadNombre}</li>
      <li class="datoMain">Humedad: ${ciudadHumedad}</li>
      <li class="datoMain"> Sensación térmica: ${ciudadTermica}</li>
      
    </ul>
  </div>
  <div class="resultSection">
    <img id="iconoClima" class='hover' src = "./assets/${ciudadIcono}.png"></img>
    <span class='spanIcon'>${ciudadPronActual}<span/>
  </div>
  <div class="resultSection">
    <ul class="datosTemps">

      <li class="datoTemp">
        <div class="horasSol">
        <div class="horaSol">
          <img class="imagenAm" src="./assets/atardecer.png" alt="">
          <span>Atardecer</span>
          <span class="spanHora">${atardecer}</span>
        </div>
        <div class="horaSol">
          <img class="imagenAt" src="./assets/amanecer.png" alt="">
          <span>Amanecer</span>
          <span class="spanHora">${amanecer}</span>
        </div>
      </div>
    </li>
      
      <li class="datoTemp">Temp: <span class="tempSpan">${ciudadTemperatura}</span></li>
      <li class="datoTemp">TempMax: <span class="tempmaxSpan">${ciudadTemperaturaMax}</span></li>
      <li class="datoTemp">TempMin: <span class="tempminSpan">${ciudadTemperaturaMin}</span></li>

    </ul>
  </div>
</div>`
};