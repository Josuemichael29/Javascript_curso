'use strict'

/**
 * Calculadora:
 *  -Pida 2 numeros por pantalla.
 *  -Si metemos uno mal, los volverá a pedir.
 *  -Mostrar en el body de la página, en una alerta, y consola el resultado de
 *  sumar, restar, multiplicar, dividir esas dos cifras.
 */
 var numero1 = 0;
 var numero2 = 0;

 do{
    numero1 = parseInt(prompt('Numero 1: ', 0));
    numero2 = parseInt(prompt('Numero 2: ', 0));
 }while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2));

 var resultado = "La suma es: " + (numero1 + numero2) + "<br/>" +
                 "La resta es: " + (numero1 - numero2) + "<br/>" +
                 "La multiplicacion es: " + (numero1 * numero2) + "<br/>" +
                 "La division es: " + (numero1 / numero2) + "<br/>";

 var resultado2 = "La suma es: " + (numero1 + numero2) + "\n" +
                 "La resta es: " + (numero1 - numero2) + "\n" +
                 "La multiplicacion es: " + (numero1 * numero2) + "\n" +
                 "La division es: " + (numero1 / numero2) + "\n";                

document.write(resultado);
console.log(resultado2);
alert(resultado2);

 
