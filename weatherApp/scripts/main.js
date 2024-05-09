//Form ID
const form = document.getElementById('formulario');
const input_ciudad = document.getElementById('inputciudad');
const contenedor = document.querySelector('.containerCard');

const inputVacio = () =>{
    return input_ciudad.value.trim() == '';
};

const buscarCiudad = (e) =>{
    e.preventDefault()
    if (inputVacio()){
        alert('Ingresa una ciuaaadad xfa :(');
        return;
    }
}

const init = () => {
    form.addEventListener('submit', buscarCiudad);
};

init()