var codigo = "1005";
//*           ^i
//*            ^j => return true

for (let i = 0; i < codigo.length - 1; i++) {
  console.log("i:", codigo[i])
  for (let j = i + 1; j < codigo.length; j++) {
    console.log("j:", codigo[j]);
    if (codigo[i] === codigo[j]) console.log("Repetido!!!")
  }
  console.log("fin del ciclo", i);
}

//* Set