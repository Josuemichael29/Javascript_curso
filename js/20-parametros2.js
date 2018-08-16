'use strict'

/**
 * Parametros REST y SPREAD
 * REST es cuando no sabemos la cantidad de parametros que necesitaremos pasar
 * SPREAD es para cuando pasas un array como parametro pero al momento de pasarlo quieres que lo interprete como distintas variables
 */

 function listadoFrutas(fruta1, fruta2, ...resto_frutas){
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log("Resto de frutas: " + resto_frutas);
 }

 var frutas = ['Naranja','Manzana'];
 listadoFrutas(...frutas , "Pera", "Sandia", "Coco");