'use strict'

//SWITCH

var edad = 44;
var imprime = "";
switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoría de edad";
        console.log(imprime);
        break;
    case 25:
        imprime = "Ya eres un adulto.";
        console.log(imprime);   
        break;
    case 40:
        imprime = "Crisis de los 40.";
        console.log(imprime);
        break;
    case 60:
        imprime = "Ya estas ruco.";
        console.log(imprime);
        break;
    default:
        console.log("No estas en un rango de edad");
}
