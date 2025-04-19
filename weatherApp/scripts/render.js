function fechaUnix(segundosDesdeEpocaUnix) {
    let date = new Date(segundosDesdeEpocaUnix*1000)
    let horas = '0' + date.getHours();
    let minutos ='0'+ date.getMinutes();
    let segundos = '0'+ date.getSeconds();

    return horas.slice(-2) + ':' + minutos.slice(-2) + ':' + segundos.slice(-2)
  }

const templateCiudad = ciudad =>{

    const {ciudadPais, ciudadNombre, ciudadHumedad,
         ciudadTermica, ciudadTemperatura, ciudadTemperaturaMax, 
         ciudadTemperaturaMin, ciudadAmanecer, ciudadAtardecer,
         ciudadIcono, ciudadPronActual} = obtenerData(ciudad)

    let amanecer = fechaUnix(ciudadAmanecer)
    let atardecer = fechaUnix(ciudadAtardecer)
    

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