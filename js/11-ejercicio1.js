'use strict'

/**
 * Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
 * PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos vuelva a pedir
 * la instrucción isNan() devuelve true o false dependiendo si es un numero o no
 * NaN = No a number
 */

var numero_1 = 0;
var numero_2 = 0;
var bandera = false;

 do{
    while(numero_1 <= 0 || numero_2 <= 0 || bandera == true){
        numero_1 = parseInt(prompt("Ingrese el numero 1: ", 0));
        numero_2 = parseInt(prompt("Ingrese el numero 2: ", 0));
        bandera = false;
    }
    if(numero_1 > numero_2){
        alert("El numero 1 es mayor que el numero 2");
        console.log("El numero 1 es mayor que el numero 2");
    } else if(numero_2 > numero_1){
       alert("El numero 2 es mayor que el numero 1");
       console.log("El numero 2 es mayor que el numero 1");
    } else if (numero_2 == numero_1){
       alert("Los numeros ingresados son iguales");
       ("Los numeros ingresados son iguales");
    } else{
        alert("Ingrese numeros correctos.");
        console.log("Ingrese numeros correctos.");
        bandera = true;
    }
 }while(bandera == true);
 