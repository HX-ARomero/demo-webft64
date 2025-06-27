# 📚 REPASO

[Volver a Inicio](../../README.md)

## 1️⃣Características principales de JavaScript

1. **Lenguaje interpretado**
   - No necesita ser compilado; el navegador lo interpreta directamente.
2. **Multiplataforma**
   - Funciona en la mayoría de los navegadores y plataformas sin necesidad de instalación adicional.
     - En el Navegador: V8
     - En entornos de Servidor: Node => V8 + libuv (módulos y FileSystem)
3. **Lenguaje de alto nivel**
   - Abstrae muchos detalles del hardware y la memoria.
4. **Basado en eventos**
   - Permite crear interactividad mediante eventos como clics, teclas, movimientos, etc.
5. **Compatible con el DOM**
   - Permite manipular y actualizar el contenido de páginas web dinámicamente.
6. **Ecosistema amplio**  
   Posee una gran comunidad, miles de librerías (como React, Vue, express, etc), y se usa tanto en frontend como en backend.
7. Las funciones son _first-class citizens_ (ciudadanas de primera clase)
   - Significa que las funciones pueden ser:
     1. **Asignadas a variables**
     2. **Pasadas como argumentos a otras funciones**
     3. **Retornadas desde otras funciones**
   - Esto hace posible en JavaScript:
     1. Programación funcional
     2. Callbacks
     3. Promesas
     4. Funciones anónimas
     5. Closures
     6. Composición de funciones

## 2️⃣Tipos de datos

- Strings: representa datos textuales (cadenas de caracteres).
- Números: permite representar y manipular valores numéricos como 37 o -9.25.
- Booleanos: representa un valor lógico y puede tener dos valores, ya sean true o false.
- Undefined: representa una variable que no ha sido declarada o a la cual no se le ha asignado un valor.
- Null: representa la ausencia intencional de cualquier valor, un valor nulo o vacío.

## 3️⃣Precedencia de operadores

- La **precedencia de operadores** determina el orden en el cual los operadores son evaluados uno respecto del otro. Los operadores con mayor precedencia se convierten en los operandos de los operadores con menor precedencia.

| Operador                         | Descripción                                 | Asociatividad       |
| -------------------------------- | ------------------------------------------- | ------------------- |
| ()                               | Parentheses                                 | Izquierda a derecha |
| ++ --                            | Auto increment y decrement                  | Derecha a izquierda |
| !                                | Logical NOT                                 | Derecha a izquierda |
| \* / %                           | Multiply, Divide y Modulus                  | Izquierda a derecha |
| + -                              | Add y Subtract                              | Izquierda a derecha |
| +                                | Concatenation                               | Izquierda a derecha |
| < <=                             | Less than y Less than or equal to           | Izquierda a derecha |
| > >=                             | Greater than y Greater than or equal        | Izquierda a derecha |
| == !=                            | Equal to y Not equal to                     | Izquierda a derecha |
| === !==                          | Identical to (same type) y Not identical to | Izquierda a derecha |
| &                                | Bitwise AND                                 | Izquierda a derecha |
| \|                               | Bitwise OR                                  |                     |
| ^                                | Bitwise XOR                                 |                     |
| <<                               | Bitwise left shift                          |                     |
| >>                               | Bitwise right shift                         |                     |
| >>>                              | Bitwise zero-filled, right shift            |                     |
| &&                               | Logical AND                                 | Izquierda a derecha |
| \|                               | Logical OR                                  | Izquierda a derecha |
| ?:                               | Ternary, conditional                        | Derecha a izquierda |
| =  +=  -=  \*=  /=  %=  <<=  >>= | Assignment                                  | Derecha a izquierda |
| ,                                | (comma)                                     |                     |

## 4️⃣Operadores de asignación compuesta

- Son **formas abreviadas** para operar con una variable y luego **asignar el resultado a esa misma variable**.
- Hace el código **más corto y legible** al evitar repetir la variable.

| Operador | Significado           | Ejemplo   | Equivale a   |
| -------- | --------------------- | --------- | ------------ |
| `+=`     | Sumar y asignar       | `x += 3`  | `x = x + 3`  |
| `-=`     | Restar y asignar      | `x -= 2`  | `x = x - 2`  |
| `*=`     | Multiplicar y asignar | `x *= 5`  | `x = x * 5`  |
| `/=`     | Dividir y asignar     | `x /= 2`  | `x = x / 2`  |
| `%=`     | Módulo y asignar      | `x %= 3`  | `x = x % 3`  |
| `**=`    | Potencia y asignar    | `x **= 2` | `x = x ** 2` |
|          |                       |           |              |

## 5️⃣Nomenclatura

- Las nomenclaturas son formas de llamar a las cosas. En programación existen ciertas reglas sobre las cuales llevamos uniformidad en el código y nos proporcionan un estándar de trabajo especialmente dentro de equipos de desarrollo de software.
- Existen 3 tipos de nomenclatura principal: **camelCase, PascalCase, snake_case.**

### 1. camelCase

- Este modo de nombrar implica la unión de dos o más palabras sin espacios entre ellas, pero diferenciadas por una letra mayúscula inicial a partir de la segunda palabra, por ejemplo: holaMundo / funcionEdadAños.

### 2. PascalCase

- Es similar a camelCase pero la primera letra de la frase también se inicia con mayúscula, al igual que cada palabra. Se mantiene la práctica de no tener espacios entre palabras y cada palabra siempre empieza con su primera letra mayúscula. Por ejemplo: HolaMundo / FuncionEdadAños

### 3. snake_case

- La nomenclatura snake_case  es definida de esta forma porque siempre la usamos sobre el piso. Las letras siempre  serán minúsculas y las  palabras están separadas por un guion bajo de esta forma: hola_mundo / funcion_edad_años

[Volver a Inicio](../../README.md)
