function modal(){
    var botonModal = document.getElementById("botonVentana");
    botonModal.addEventListener("click", cerrarModal, false);
}

function crearModal(){
    var posicion = document.getElementById("modal");
    posicion.style.display = "block";
    posicion.style.animation ="emerger 2000ms linear";
}
function cerrarModal(){
    var posicion = document.getElementById("modal");
    posicion.style.display = "none";
}

