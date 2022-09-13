'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

let cadena = num.split("");//  1 0 0

cadena = cadena.reverse();
let calculo ; 

let array=[];

for( let i=0;i<cadena.length;i++){
 
calculo = cadena[i] * 2 **i;
 
array.push(calculo); 
}
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
return sum;

}

function DecimalABinario(num) {
  // tu codigo aca

  let numero=num;
  let arrayResto = [];
  
  while(numero!==0){
  
    arrayResto.unshift(numero % 2);
    numero=Math.floor(numero/2);
  }
 
  return arrayResto.join("");

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}

