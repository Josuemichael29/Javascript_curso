'use strict'

//  ALERTA
alert("Prueba 1");
alert("Prueba 2");

//  CONFIRMACIÓN
var mi_resultado = confirm("¿Estas seguro de querer continuar?");
console.log("Mi resultado 1: " + mi_resultado);

//  INGRESO DATOS
var mi_resultado2 = prompt("¿Qué edad tienes?", 18);//Primer parametro el texto, el segundo el valor por default 
console.log("Mi resultado 2: " + parseInt(mi_resultado2));
console.log(typeof(parseInt(mi_resultado2)))