//* [ 1, 2, 3, 4 ]

var homero = {
  nombre: "Homero",
  apellido: "Simpson",
  edad: 39,
  direccion: {
    calle: "Siempreviva",
    numero: 742,
    ciudad: "Springfield"
  },
  mascotas: ["Huesos", "Bola de Nieve"]
};

//* DOT NOTATION
//* Nombre de la Propiedad
console.log(homero.nombre);
console.log(homero.direccion);
console.log(homero.direccion.ciudad);
console.log(homero.mascotas[1]);

//* BRACKET NOTATION
//* String ó Variable
console.log(homero["apellido"]);
var consultarEdad = "edad";
console.log(homero[consultarEdad]);
console.log(homero["consultarEdad"]); // undefined => NO EXISTE PROPIEDAD 
console.log(homero.consultarEdad); // undefined => NO EXISTE PROPIEDAD 