var arreglo = [2, 3, 4, 5];
//*                     3

var retornoDeMap = arreglo.map(function(elemento, indice, array){
  return elemento * 2;
});

//* [4, 6, 8, 10]

console.log(arreglo);
console.log(retornoDeMap);