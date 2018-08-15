'use strict'

/**
 * Utilizando un buble mostrar le media y la suma de los resultados
 * introducidos por el usuario hasta que el usuario introduzca un numero 
 * negativo
 */

 var suma = 0;
 var contador = 0;
 var aux = 0;
 var ban = true;
 do{
    aux = parseInt(prompt('Introduce el numero: ', 0));
    ban = true;
    if(isNaN(aux)){
        aux = 0;
        contador++;
    } else if(aux >= 0){
        suma += aux;
        contador++;
    } else{
        ban = false;
    }
 }while(ban == true);

 console.log('La suma es: ' + suma);
 console.log('La media es: ' + (suma/contador));

