var homero = {
  nombre: "Homero",
  apellido: "Simpson",
  edad: 39,
  direccion: {
    calle: "Siempreviva",
    numero: 742,
    ciudad: "Springfield"
  },
  mascotas: ["Huesos", "Bola de Nieve"],

  saludar: function() {
    console.log(`Hola, soy Homero !!!`)
  },
  despedir: function() {
    console.log(`Adiós !!!`)
  }
};

//* AGREGAR PROPIEDAD
homero.hobbie = null;
console.log(homero);

//* MODIFICAR PROPIEDAD
homero.hobbie = "Mirar Tele...";
console.log(homero);

//* ELIMINAR PROPIEDAD
delete homero.hobbie;
console.log(homero);