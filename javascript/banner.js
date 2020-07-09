function banner() {
    setInterval(composicionBanner, 2000);
}
contador = 0;

function composicionBanner(){
    var posicionDiv = document.getElementById("banner");
    var lugar = ["Carcassone", "Edimburgo", "Angkor Watt", "Taj Mahal", "Tokio", "Roma"];
    var extension = ["Carcassone.jpg", "Edimburgo.jpg", "Angkor.jpg", "Taj.jpg", "Tokio.jpg", "Roma.jpg"];
    posicionDiv.innerHTML= "<h6>" + lugar[contador]+"</h6>";
    posicionDiv.style.backgroundImage="url('../imagenes/Banner/"+extension[contador]+"')";
    if(contador == lugar.length-1){
        contador=0;
    }
    else{
        contador++;
    }
}
