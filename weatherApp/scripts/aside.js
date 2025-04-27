const listaFuncs = document.getElementById('listafuncs');
const funciones = Array.from(listaFuncs.children);
const contenedorGraficos = document.getElementById('contenedorGraficos')


funciones.forEach(funcion => {
    funcion.addEventListener('click', () => {
      funciones.forEach(marcado => marcado.classList.remove('fondoFuncionalidad'))
      funcion.classList.add('fondoFuncionalidad')
      contenedorGraficos.classList.add('oculto')
    })
  });