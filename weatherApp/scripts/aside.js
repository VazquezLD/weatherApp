const listaFuncs = document.getElementById('listafuncs');
const funciones = Array.from(listaFuncs.children);

funciones.forEach(funcion => {
    funcion.addEventListener('click', () => {
      funciones.forEach(marcado => marcado.classList.remove('fondoFuncionalidad'))
      funcion.classList.add('fondoFuncionalidad')
    })
  });