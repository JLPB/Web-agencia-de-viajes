function select() { 
    var continente = document.getElementById("conti");
    continente.addEventListener("change", crearOpciones, false);
    var pais = document.getElementById("pays");
    pais.addEventListener("change", cambiarImagen, false)
    
}
// Devuelve el continente introducido en el primer select
function indice1(){
    var seleccion1 = document.getElementById("conti");
    var opcionEscogida1 = seleccion1.options[seleccion1.selectedIndex].text;
    return opcionEscogida1;
}
// Devuelve el país introducido en el segundo select
function indice2(){
    var seleccion2 = document.getElementById("pays");
    var opcionEscogida2 = seleccion2.options[seleccion2.selectedIndex].text;
    return opcionEscogida2;
}
// Crea las opciones en función del continente seleccionado
function crearOpciones(){
    var posicionSelect = document.getElementById("pays");
    var posicionOpciones = posicionSelect.getElementsByTagName("option");
    var continente = indice1();
    
    if(continente.match("Europa")){
       var arrayEuropa = ["España", "Irlanda", "Portugal"]
       for(var i=0; i < arrayEuropa.length; i++){
           posicionOpciones[i].value = arrayEuropa[i];
           posicionOpciones[i].text = arrayEuropa[i];
       } 
    }
    else if(continente.match("Asia")){
        var arrayAsia = ["China", "Filipinas", "Tailandia"]
       for(var i=0; i < arrayAsia.length; i++){
           posicionOpciones[i].value = arrayAsia[i];
           posicionOpciones[i].text = arrayAsia[i];
       } 
    }
    cambiarImagen();
}
// Cambia la imagen mostrada
function cambiarImagen(){
    var pais = indice2();
    var imagen = document.getElementById("ima");
    imagen.src = "../imagenes/select/"+pais+".jpg"
    imagen.alt = pais;
    imagen.style.borderStyle = "solid";
    imagen.style.borderWidth = "5px";
    imagen.style.borderColor = "black";
}


