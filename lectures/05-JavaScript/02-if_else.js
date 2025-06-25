function validar(valor) {
  if(valor) {
    //* Si condición es verdadera, se ejecuta
    console.log(valor + ": es Truthy");
  } else {
    //* Si condición es falsa, se ejecuta
    console.log(valor + ": es Falsy");
  }
}

//* Valores Falsy
validar(false);
validar(0);
validar("");
validar(null);
validar(undefined);
// validar();
validar(NaN);

//* Valores Truthy
validar(!false);
validar(1);
validar(true);

validar(7 < 5);