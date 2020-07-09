function objeto(){
    
    // Crear las opciones del desplegable
    crearOpciones();
    //Relacionado con el objeto
    var boton = document.getElementById("crear");
    boton.addEventListener("click", crearReserva,false);
    var eliminar = document.getElementById("eliminar");
    eliminar.addEventListener("click", eliminarReserva,false);
    var modificar = document.getElementById("modificar");
    modificar.addEventListener("click",modificarReserva,false)  
}

function crearOpciones(){
    var lugares = ["Roma", "Carcassone", "Edimburgo", "Angkor Watt", "Taj Mahal" ,"Tokio"];
    var posicion = document.getElementById("destinos");
    for(elemento in lugares){
        var elementoOption = document.createElement("option");
        elementoOption.value = lugares[elemento];
        var elementoTexto = document.createTextNode(lugares[elemento]);
        elementoOption.appendChild(elementoTexto);
        posicion.appendChild(elementoOption);
    }
}
// funciones relacionadas con los objetos, la creación, modificación y borrado de las reservas
/* --------------------------------------------------------------------------------------------------------------*/

var reservas = []; // Array de reservas que albergará todas las reservas que se creen
function Reserva(destino, ida,vuelta){ //Constructor del objeto
        this.destino = destino;
        this.ida = ida;
        this.vuelta = vuelta;
}

/* Creación de la reserva*/
function crearReserva(suceso){
    var evento = suceso || window.event;
    
    var listaOpciones = document.getElementById("destinos");
    var destino = listaOpciones.options[listaOpciones.selectedIndex].text
    var ida = document.getElementById("ida").value;
    var vuelta = document.getElementById("vuelta").value;    
    if( ida.length == 0){
        alert("Por favor indique la fecha de ida");
    }
    else if(vuelta.length == 0){
        alert("Por favor indique la fecha de vuelta");
    }
    else{
       var confirmacion = window.confirm("Va a crearse la reserva con destino a " + destino + " con salida el " + ida + " y vuelta el " + vuelta);
        if(confirmacion == true) {
            nuevaReserva = new Reserva(destino, ida, vuelta);
            agregarReserva();
            crearModal();
        }
    }
}
/* Añadir la reserva a la lista de objetos y a la página*/
function agregarReserva(){
    reservas.push(nuevaReserva);
    var posicion = document.getElementById("objetos");
    var elementoP = document.createElement("p");
    var texto = document.createTextNode("Viaje a " + nuevaReserva.destino + ": Tiene programada la salida para el día " + nuevaReserva.ida + " y la vuelta para el " + nuevaReserva.vuelta);
    elementoP.appendChild(texto);
    posicion.appendChild(elementoP)
}
/* Modificar la última reserva de la página*/
function modificarReserva(){
    var respuesta = window.confirm("Esta operación modificará la última reserva, ¿Desea continuar?");
    if(respuesta == true){
        /*eliminar reserva antigua*/
        reservas.pop();
        var posicion = document.getElementById("objetos");
        var ultimo = posicion.lastChild;
        posicion.removeChild(ultimo);
        /* Recoger datos y crear objeto*/
        var listaOpciones = document.getElementById("destinos");
        var destino = listaOpciones.options[listaOpciones.selectedIndex].text
        var ida = document.getElementById("ida").value;
        var vuelta = document.getElementById("vuelta").value;
        if( ida.length == 0){
            alert("Por favor indique la fecha de ida");
            }
        else if(vuelta.length == 0){
            alert("Por favor indique la fecha de vuelta");
            }
        else{
           nuevaReserva = new Reserva(destino, ida, vuelta); 
        }
        /* Sustituir reserva antigua por la nueva*/
        reservas.push(nuevaReserva);
        var elementoP = document.createElement("p");
        var texto = document.createTextNode("Viaje a " + nuevaReserva.destino + ": Tiene programada la salida para el día " + nuevaReserva.ida + " y la vuelta para el " + nuevaReserva.vuelta);
        elementoP.appendChild(texto);
        posicion.appendChild(elementoP);        
    }
}
/* Eliminar la última reserva de la página*/
function eliminarReserva(){
    reservas.pop();
    var estado = true;
    var posicion = document.getElementById("objetos");
    var ultimo = posicion.lastChild;
    var respuesta = window.confirm("Esta operación borrará la última reserva, ¿Desea continuar?");
    if(respuesta == true){
      try{
      posicion.removeChild(ultimo);
      estado = true;
    }
    catch(error){
       estado = false 
    }
    finally{
       if (estado == true){
           alert("reserva borrada");
       }
       else if(estado == false){
           alert("No quedan reservas para borrar");
       } 
    }  
    }   
}
