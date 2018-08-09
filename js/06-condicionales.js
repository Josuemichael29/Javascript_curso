'use strict'

//Condicional IF
// Si A es igual a B entonces haz algo

var edad = 18;
var nombre = 'David Suarez';

/*  OPERADORES RACIONALES
*       Mayor:          >
*       Menor:          <
*       Mayor o igual:  >=
*       Menor o igual:  <=
*       Igual:          ==
*       Distinto:       !=
*/

if(edad >= 18){
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");
}else {
    console.log(nombre + " tiene " + edad + " años, es menor de edad")
}

/** OPERADORES LÓGICOS
 * AND(Y):  &&
 * OR(O):   ||
 * NEGACIÖN: !
 */

 // Negación
 var year = 2016;
 if(year != 2016){
     console.log("El año no es 2016")
 }

 //AND
 if(year >= 2000 && year <= 2020){
     console.log("Estamos en la era actual.");
 }else{
     console.log("Estamos en la era moderna.");
 }

 //OR
 if(year == 2016 || year == 2018 || (year == 2014 && year == 2020)){
     console.log("Es año bisiesto."); //mentira jaja
 }else{
     console.log("Año no registrado.")
 }
