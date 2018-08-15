'use strict'

/**
 * Mostrar todos los numeros que existen dentro del rango de 2 numeros
 * introducidos por el usuario
 */

 var numero1 = parseInt(prompt('Introduce el primer numero: ', 0));
 var numero2 = parseInt(prompt('Introduce el segundo numero: ', 0));
 var diferencia = 0;

 
 if(numero1 > numero2){
    diferencia = numero1 - numero2;
    document.write("<h2>Del numero :" + numero2 + "hasta el numero: " + numero1 + "estan: </h2>");
    for(var i=1; i<diferencia; i++){
        document.write("<p>" + (numero2 + i) + "</p>");
    }
 } else if(numero2 > numero1){
    diferencia = numero2 - numero1;
    document.write("<h2>Del numero: " + numero1 + " hasta el numero: " + numero2 + " estan: </h2>");
    for(var i=1; i<diferencia; i++){
        document.write("<p>" + (numero1 + i) + "</p>");
    }
 } else{
     alert('Los numeros ingresados son iguales');
 }

