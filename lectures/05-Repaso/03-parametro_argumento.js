//* PARAMETROS
function contar(num_1, num_2, num_3, num_4, num_5) {
  //* var num_1 = 1;
  //* var num_2 = 2;
  //* var num_3 = 3;
  console.log(num_2)
  console.log("argumentos:", arguments);
  console.log("argumentos recibidos:", arguments.length);
  console.log("parametros declarados:", contar.length);
}

//* ARGUMENTOS
contar(1, 2, 3, 4, 5);