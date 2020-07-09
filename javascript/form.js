function form() {
    //Validación previa al envío del formulario
    var enviar = document.getElementById("env");
	enviar.addEventListener("click",validar,false);
    // Text area
    var area = document.getElementById("area");
    area.addEventListener("keypress",maxCaracteres,false);
    area.addEventListener("keyup", borrar, false)
    var resetText = document.getElementById("vaciarText");
    resetText.addEventListener("click",resetTextArea, false);
    // Crear campo adicional dependiendo del checkbox seleccionado
    var mostrarOpcion = document.getElementById("paises");
    mostrarOpcion.addEventListener("click",mostrarCampo,false)
}
var caracteres =0;
/* Validación del formulario*/
/* --------------------------------------------------------------------------------------------------------------*/
function validar(suceso){
    var evento = suceso || window.event;
    var user = document.getElementById("user").value;
    var correo = document.getElementById("correo").value;
    var validarCorreo =/\S+@\S+\.\S+/;
    var telefono = document.getElementById("telefono").value;
    var validarTelefono =/[0-9]{9}/;
    var peso = tamanyo();
    var chifre = comprobarNumero();
    /*Validar que el campo de texto no está vacio*/
    if(user == null || user.length == 0 || /^\s+$/.test(user)){
        alert("Completa el campo usuario por favor");
        evento.preventDefault();
    }
    /*Validar que los datos introducidos son numéricos*/
    if(chifre == false){
        alert("El campo número está vacio o no todos los caracteres introducidos son numeros");
        evento.preventDefault();
    }
    /* Validar que el teléfono sigue el pattern establecido*/
    if(telefono.match(validarTelefono)){
        if(telefono.length != 9){
        alert("Indica un número de teléfono con 9 numeros sin espacios por favor")
        evento.preventDefault();
        }
    }
    else{
        alert("Indica un número de teléfono con 9 numeros sin espacios por favor")
        evento.preventDefault();
    }
    /* Validar que el correo electrónico sigue el pattern correspondiente*/
    if(!correo.match(validarCorreo)){
        alert("indica un email válido");
        evento.preventDefault();
    }
    /*Comprobación del tamaño del archivo adjunto*/
    if(peso > 400000){
        alert("El tamaño del archivo adjunto tiene que ser inferior a 400Kb")
        evento.preventDefault();
    }
}
/* Comprobaciones para la validación*/
/* --------------------------------------------------------------------------------------------------------------*/
/* Comprobar que lo que se le pasa texto a un campo que es un número, el resultado se almacena en la variable chifre de la función validar */ 
function comprobarNumero(){
    var numero = document.getElementById("numero").value;
    var resultado = parseInt(numero);
    if (isNaN(resultado)){
        return false;
    }
    else {
        return true;
    }
}
/* Comprobar tamaño del archivo subido */
function tamanyo(){
    var posicion = document.getElementById("subir");
    var tamany = 0;
    if(posicion.files.length > 0){
      tamany = posicion.files.item(0).size;  
    }
    return tamany;
}

/* Gestión del text area*/
/* --------------------------------------------------------------------------------------------------------------*/

/*Comprobar el máximo de caracteres*/
function maxCaracteres(suceso){
    var evento = suceso || window.event;
    var textArea = document.getElementById("area");

    var maximo = 1000;
    if (textArea.value.length > maximo){
        evento.preventDefault();
    }
    else{
        caracteres++;
        contadorCaracteres();  
        return true;
    }
}
/* Disminuir el número de caracteres porque se usa la tecla borrar */
function borrar(suceso){
    var evento = suceso || window.event;
    var tecla = evento.charCode || evento.keyCode;
    if (tecla == 8){
        caracteres--;
        contadorCaracteres(); 
        }
}
/*Contar caracteres y actualizar la página con el valor*/
function contadorCaracteres(suceso){
    var posicion = document.getElementById("contarCaracteres");
    posicion.innerHTML = "El máximo de caractéres es 1.000, de momento llevas " + caracteres;
}

/* Reset del campo text area*/
function resetTextArea(suceso){
    var evento = suceso || window.event;
    document.getElementById("area").value = "";
    evento.preventDefault();
}


/* Gestión del checkbox*/
/* --------------------------------------------------------------------------------------------------------------*/
/* Comprueba que el campo checkbox si esté o no activado */
function campoTxtBox(){
    var checkBoxSi = document.getElementById("paises");
    if(checkBoxSi.checked){
        return true;
    }
    else{
        return false;
    }
}
/*En caso de que el checkbox si esté marcado mostrará un campo adicional*/
function mostrarCampo(){
    var comprobar = campoTxtBox();
    var posicion = document.getElementById("ocultar");
    if(comprobar == true){
        posicion.style.display="inline";
    }
    else{
        posicion.style.display="none";
    }
} 
