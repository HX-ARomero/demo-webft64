# 🟩 NODE

[Volver a Inicio](../../README.md)

- Página de Node JS: https://nodejs.org/es

## 💻 ¿Qué es la programación?

- La **programación** es el proceso de escribir instrucciones (código) que una computadora puede entender para realizar tareas específicas. Estas tareas pueden ir desde mostrar texto en pantalla hasta procesar pagos, controlar robots o manejar aplicaciones web.
- Todo lenguaje de programación consta de tres elementos:
  - Palabras reservadas
  - Sintaxis
  - Semántica

### 🔑 **1. Palabras reservadas**

- Son palabras que **tienen un significado especial** dentro de un lenguaje de programación.
- **No puedes usarlas como nombres de variables, funciones, etc.** porque el lenguaje ya las usa para su propia lógica.
- **Ejemplos en JavaScript:** `if`, `else`, `while`, `function`, `return`, `let`, `const`, `class`, `new`, etc.

```js
let if = 5; // ❌ Error: "if" es una palabra reservada
```

### ✍️ **2. Sintaxis**

- Es el **conjunto de reglas** que define **cómo debes escribir el código** para que el lenguaje lo entienda.
- Es como la gramática de un idioma.
- **Ejemplo en JavaScript (correcto vs. incorrecto):**

```js
let nombre = "Juan";  // ✅ Sintaxis correcta
let nombre "Juan"     // ❌ Error de sintaxis: falta el "="`
```

### 🧠 **3. Semántica**

- Se refiere al **significado del código**: qué hace, cómo se interpreta.
- Un código puede estar bien escrito **sintácticamente**, pero no hacer lo que esperas **semánticamente**.
- **Ejemplo:**

```js
let total = "5" + 3; // ✅ Sintaxis correcta
console.log(total); // Muestra "53", no 8
// ❌ Error semántico si esperabas una suma numérica
```

### En resumen:

| Concepto          | ¿Qué es?                          | Ejemplo                     |
| ----------------- | --------------------------------- | --------------------------- |
| Palabra reservada | Palabra con uso especial          | `if`, `return`, `class`     |
| Sintaxis          | Reglas de cómo escribir el código | `let x = 10;`               |
| Semántica         | Significado del código            | `"5" + 3` da `"53"`, no `8` |

## ¿Para qué sirve Node.js?

- **Node.js** es un entorno de ejecución para JavaScript del lado del servidor.
- Sirve para construir aplicaciones rápidas y escalables, especialmente del tipo **backend** (como APIs, servidores web, etc.).
- Creado por Ryan Dahl, un desarrollador de software estadounidense, quien recientemente también creó DENO, una alternativa a NODE, su otra creación.
- **Principales usos:**
  - Crear servidores web y APIs REST o GraphQL.
    - Desarrollar aplicaciones en tiempo real (como chats o juegos online).
  - Automatizar tareas con scripts.
  - Construir sistemas completos (stack JavaScript: Node.js + frontend).

## ¿Qué es V8?

- **V8** es el **motor de JavaScript** creado por **Google**.
- Su función es **ejecutar código JavaScript** (y también **WebAssembly**) de forma rápida y eficiente.
- ¿Dónde se usa?
  - En el **navegador Google Chrome** 🧭
  - En **Microsoft Edge** (porque usa Chromium)
  - En **Node.js** (gracias a V8, puedes correr JavaScript fuera del navegador)
- ¿Qué hace V8?
  1. **Lee tu código JavaScript.**
  2. Lo **interpreta rápidamente** (para empezar a ejecutarlo de inmediato).
  3. Luego lo **compila a código máquina** usando **JIT (Just-In-Time Compilation)** para mejorar el rendimiento.
  4. Optimiza el código mientras se ejecuta (si detecta que algo se repite, lo mejora automáticamente).

## Lenguaje Compilado Vs Interpretado

### Compilador

- **Traduce todo el programa completo antes de ejecutarlo.**
- Genera un archivo ejecutable (por ejemplo, `.exe`).
- La ejecución suele ser **más rápida**, porque ya está todo traducido.
- Si hay errores, los muestra **todos antes de correr el programa**.
- **Ejemplos de lenguajes compilados:** C, C++, Rust, Go.
- **Ejemplo de flujo:**
  - `Código fuente → [compilador] → Código máquina → [ejecutar]`

### Intérprete

- **Traduce y ejecuta el código línea por línea**, al momento.
- **No genera un archivo ejecutable.**
- Es **más flexible**, pero suele ser **más lento**.
- Detiene la ejecución al encontrar un error.
- **Ejemplos de lenguajes interpretados:** Python, JavaScript, Ruby.
- **Ejemplo de flujo:**
  - `Código fuente → [intérprete] → [ejecutar]`

### Diferencias clave

| Característica         | Compilador                 | Intérprete                 |
| ---------------------- | -------------------------- | -------------------------- |
| Traducción             | Todo el código a la vez    | Línea por línea            |
| Velocidad de ejecución | Más rápida                 | Más lenta                  |
| Flexibilidad           | Menor (pero más eficiente) | Mayor (ideal para pruebas) |
| Detección de errores   | Antes de ejecutar          | Durante la ejecución       |

💡 Algunos lenguajes usan una mezcla de ambos. Por ejemplo, **Java** compila a "bytecode" y luego lo ejecuta una máquina virtual (JVM), que lo interpreta.

## JavaScript

- JavaScript es **principalmente un lenguaje interpretado**, pero con matices modernos importantes:

### Tradicionalmente: Interpretado

- En sus inicios, JavaScript se ejecutaba **línea por línea** directamente en el navegador, mediante un **intérprete**.
- Esto lo hacía **rápido de probar y flexible**, pero no tan eficiente en rendimiento.

### Actualmente: Interpretado _y_ compilado (JIT)

- También se conoce como Semi-Interpretado.
- Los navegadores modernos (como Chrome, Firefox, etc.) usan **motores JavaScript avanzados** como V8 (de Google), SpiderMonkey, etc., que hacen lo siguiente:
  1.  **Interpretan el código al inicio** para que funcione al instante.
  2.  Luego lo **compilan en tiempo de ejecución** usando una técnica llamada **JIT (Just-In-Time Compilation)**.
  3.  Esto mejora mucho el **rendimiento**, sin perder la flexibilidad.

### En resumen:

| Característica       | JavaScript                                |
| -------------------- | ----------------------------------------- |
| ¿Interpretado?       | ✅ Sí, especialmente en pruebas o scripts |
| ¿Compilado?          | ✅ Sí, mediante JIT (tiempo de ejecución) |
| ¿Archivo ejecutable? | ❌ No genera `.exe` ni binarios           |

🔍 **Dato curioso:** Gracias a esta combinación, JavaScript puede ser usado tanto en el navegador como en el servidor (con **Node.js**) y sigue siendo rápido.

## ¿Qué es un CLI?

- **CLI** significa **Command Line Interface** (Interfaz de Línea de Comandos).
- Es un programa que **se ejecuta desde la terminal** y te permite **darle instrucciones con texto**, en lugar de usar botones o ventanas gráficas.
- ¿Para qué sirve un CLI?
  - Automatizar tareas (por ejemplo, compilar, crear archivos, ejecutar pruebas).
  - Administrar proyectos.
  - Ejecutar comandos de manera rápida y precisa.
  - Desarrolladores, administradores de sistemas y herramientas de desarrollo.
- Ciclo de una CLI:
  1.  Prompt esperando comando
  2.  Ejecución del comando ingresado
  3.  Mostrar salida y volver al prompt
- Ejemplos:
  - NODE JS
  - PowerShell
  - npm / yarn
  - git
  - nest
  - python
  - Terminal de Linux

## Runtime de JavaScript

- Conocer la versión que tenemos instalada:
  - Abrimos "Consola Bash" (no cerrar, la utilizaremos luego...)

```bash
$ node -v
```

- Link a [la página de Node](https://nodejs.org/es)
  - LTS: Long Term Suppport
  - Actual: Con los últimos cambios, no siempre estable

[Volver a Inicio](../../README.md)