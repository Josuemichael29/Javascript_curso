'use strict'

/** 
 * Mostrar todos los numeros impares que hay entre dos numeros
 * introducidos por el usuario
*/

var numero1 = parseInt(prompt('Introduzca el numero 1: ', 0));
var numero2 = parseInt(prompt('Introduzca el numero 2: ', 0));

document.write("<h2>Del numero : " + numero1 + " hasta el numero: " + numero2 + " estan: </h2>");

for(numero1; numero1<numero2; numero1++){
    if((numero1%2) != 0){
        document.write("<p>" + numero1 + "</p>");
    }
}