'use strict'

/**
 * Funciones
 *      Una función es una agrupación reutilizable de un conjunto de
 *      instrucciones.
 */

 function calculadora(numero1, numero2, mostrar = false){
     if(mostrar == false){
        console.log("Suma: " + (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("Multiplicación: " + (numero1*numero2));
        console.log("División: " + (numero1/numero2));
     } else{
        document.write("Suma: " + (numero1+numero2) + "<br/>");
        document.write("Resta: " + (numero1-numero2) + "<br/>");
        document.write("Multiplicación: " + (numero1*numero2) + "<br/>");
        document.write("División: " + (numero1/numero2) + "<br/>");
     }
 }

 var numero1 = parseInt(prompt('Ingrese el numero 1: ', 0));
 var numero2 = parseInt(prompt('Ingrese el numero 2: ', 0));
 calculadora(numero1, numero2, true);