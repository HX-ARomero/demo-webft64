# ERRORES EN JavaScript

[Volver a Inicio](../../README.md)

> Como desarrolladores, convivimos permenentemente con el error.
>
> Es importante saber identificar el tipo de error que estamos viendo para poder solucionarlo.

## Tipos de errores en JavaScript

### 1. ✅ SyntaxError

Ocurre cuando hay un error de sintaxis en el código: falta algo o está mal escrito.

Ejemplo:

```js
if (true {
  console.log("Hola");
}
// ❌ Falta el paréntesis de cierre

// Solución:
if (true) {
  console.log("Hola");
}
```

### 2. ✅ ReferenceError

Se usa una variable que no fue declarada o está fuera de alcance.

Ejemplo:

```js
console.log(nombre); // ❌ ReferenceError: nombre is not defined

// Solución:
let nombre = "Homero";
console.log(nombre);
```

### 3. ✅ TypeError
   Se intenta usar un valor de un tipo de forma incorrecta.

Ejemplo:

```js
let num = 5;
num.toUpperCase(); // ❌ TypeError: num.toUpperCase is not a function

// Solución:
let texto = "Hola";
texto.toUpperCase(); // ✅
```

### 4. ✅ RangeError
   Se pasa un valor fuera del rango válido.

Ejemplo:

```js
let arr = new Array(-5); // ❌ RangeError: Invalid array length

// Solución:
let arr = new Array(5); // ✅
```

### 5. ✅ EvalError (raro)
   Relacionado con el uso incorrecto de eval() (en desuso). Es poco común.

[Volver a Inicio](../../README.md)