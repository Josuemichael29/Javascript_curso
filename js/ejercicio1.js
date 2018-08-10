'use strict'

/**
 * Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
 */

 var numero_1 = prompt("Ingrese el numero 1: ", 0);
 var numero_2 = prompt("Ingrese el numero 2: ", 0);

 if(numero_1 > numero_2){
     alert("El numero 1 es mayor que el numero 2");
     console.log("El numero 1 es mayor que el numero 2");
 } else if(numero_2 > numero_1){
    alert("El numero 2 es mayor que el numero 1");
    console.log("El numero 2 es mayor que el numero 1");
 } else{
    alert("Los numeros ingresados son iguales");
    console.log("Los numeros ingresados son iguales");
 }