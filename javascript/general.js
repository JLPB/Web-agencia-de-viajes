/*En este archivo se encuentran las funciones comunes a todas las páginas, estas funciones son:
 Mostrar la hora, el menú desplegable y cambiar el color de fondo*/

function general() {
    // Hora
    crearHora();
    setInterval(tiempo, 1000);
    // Listeners menú desplegable
    var listaDesplegable = document.getElementById("botonact");
    listaDesplegable.addEventListener("mouseover", desplegar, false);
    listaDesplegable.addEventListener("mouseleave", replegar, false);
    //Listeners cambiar color de la web
    document.body.addEventListener("keydown", cambiarFondo, false);
    document.body.addEventListener("click", generarColor, false);
}

// Menu desplegable
/* --------------------------------------------------------------------------------------------------------------*/
function desplegar(suceso){
    var evento = suceso || window.event;
    var posicion = document.getElementsByClassName("opcionesHide")[0];
    var posicion2 = document.getElementsByClassName("opcionesHide")[1];
    posicion.style.display ="block";
    posicion2.style.display ="block";
    var posicion3 = document.getElementById("botonHide");
    posicion3.style.display="inline";
}

function replegar(suceso){
    var evento = suceso || window.event;
    var posicion = document.getElementsByClassName("opcionesHide")[0];
    var posicion2 = document.getElementsByClassName("opcionesHide")[1];
    posicion.style.display ="inline-block";
    posicion2.style.display ="inline-block";
    var posicion3 = document.getElementById("botonHide");
    posicion3.style.display="none";
}
// Mostrar la hora
/* --------------------------------------------------------------------------------------------------------------*/
function crearHora(){
    var fecha = new Date() 
    var fechaHora = fecha.getDate() + "/" + (fecha.getMonth()+1) +  "/" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    var textoFechaHora = document.createTextNode(fechaHora)
    document.getElementById("hora").appendChild(textoFechaHora);
}
function tiempo(){
    var fecha = new Date() 
    var fechaActual = fecha.getDate() + "/" + (fecha.getMonth()+1) +  "/" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    document.getElementById("hora").innerHTML = fechaActual;
}

// Cambiar de color la página
/* --------------------------------------------------------------------------------------------------------------*/
function generarColor (){
        var array = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9', 'A', 'B', 'C', 'D', 'E', 'F'];
        var color = '#';
        for(var i = 0; i<6; i++){
            color = color + array[Math.floor(Math.random()*16)];
        }
        return color;
}
function cambiarFondo(suceso){
    var evento = suceso || window.event
    var color = generarColor();
    if((evento.ctrlKey) && (String.fromCharCode(evento.keyCode) == "C")){   
        event.preventDefault();
        document.getElementById("colc").style.backgroundColor = color;
    }
}
