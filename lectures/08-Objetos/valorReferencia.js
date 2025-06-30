//* VALORE PRIMITIVOS - GUARDADO/COPIA POR VALOR
//* string, number, boolean, null, undefined

//* OBJETOS - GUARDADO/COPIA POR REFERENCIA
//* Arrays, Objetos

var numero = 2;
var copiaNumero = numero;

copiaNumero = 5;
console.log(numero);
console.log(copiaNumero);

//* -----------------
var arreglo = [];
var copiaArreglo = arreglo;
copiaArreglo.push(5);
console.log(arreglo);
console.log(copiaArreglo);