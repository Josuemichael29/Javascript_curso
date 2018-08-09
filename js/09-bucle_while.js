'use strict'

//  BUCLE WHILE

var year = 2018;

while(year <= 2051){
    console.log("Estamos en el año: " + year);
    
    if(year == 2025){
        break;
    }
    
    year++;
}


//  BUCLE DO-WHILE

var years = 18;

do{
    alert("Cuando sea diferente a 20");
    years++;
}while(years != 20);