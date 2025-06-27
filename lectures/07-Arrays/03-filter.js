var arreglo = ["0: bajo", "1: bajo", "2: medio", "3: alto", "4: alto"];

var nivelBuscado = "noExiste";

var arregloFiltrado = arreglo.filter(function(elemento, indice, array){
  console.log(indice);
  console.log(elemento);
  return elemento.includes(nivelBuscado);
});

//* ["0: bajo", "1: bajo"]

console.log(arreglo);
console.log(arregloFiltrado);
