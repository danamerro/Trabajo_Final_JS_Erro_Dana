var resultado = 0;

function estudiantePromo(){
    document.getElementById("pago").innerHTML ="";
    var resultado= 200-(200*0.8);
    document.getElementById("pago").innerHTML +=resultado;    
}

function traineePromo(){
    document.getElementById("pago").innerHTML="";
    var resultado= 200-(200*0.5);
    document.getElementById("pago").innerHTML+=resultado;
}

function juniorPromo(){
    document.getElementById("pago").innerHTML="";
    var resultado= 200-(200*0.15);
    document.getElementById("pago").innerHTML+=resultado;
}

function botonBorrar(){
    resultado = 0;
    document.getElementById("pago").innerHTML = "";
}

function botonDescuento(){
    var seleccion = document.getElementById("listaCategoria")
    var cantidad = document.getElementById("cantidadEntradas")

    if (seleccion.value == 1){
        console.log("test")

        document.getElementById("pago").innerHTML = "";
        resultado += (200 - (200 * 0.8)) * cantidad.value;
        document.getElementById("pago").innerHTML += resultado;
    
    }else if (seleccion.value == 2){

        document.getElementById("pago").innerHTML = "";
        resultado += (200 - (200 * 0.5)) * cantidad.value;
        document.getElementById("pago").innerHTML += resultado;

    }else if (seleccion.value == 3){

        document.getElementById("pago").innerHTML = "";
        resultado += (200 - (200 * 0.15)) * cantidad.value;
        document.getElementById("pago").innerHTML += resultado;

    }
}