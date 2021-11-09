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
    document.getElementById("pago").innerHTML="";
}