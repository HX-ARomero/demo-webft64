# ​Categorías de etiquetas HTML (según el estándar):

[Volver a Inicio](../../README.md)

- W3C (World Wide Web Consortium): Es una **organización internacional** fundada en 1994 por **Tim Berners-Lee** (el creador de la Web) que se encarga de **desarrollar estándares web abiertos** para garantizar que la web sea accesible, interoperable y evolucione de forma coherente.
	- Mantiene estándares como: HTML (hasta HTML5), CSS, SVG, Web Accessibility (WCAG), XML, entre muchos otros.
- WHATWG (Web Hypertext Application Technology Working Group): es un grupo de trabajo fundado en **2004** por desarrolladores de Apple, Mozilla y Opera (más tarde se unió Google), como respuesta a la lentitud del W3C en evolucionar el HTML.
- Hasta 2019, **W3C y WHATWG desarrollaban HTML por separado** (HTML5 vs. HTML Living Standard).

- En el HTML Living Standard (WHATWG), los elementos se agrupan en **categorías de contenido** que definen su comportamiento y uso. Las etiquetas semánticas y no semánticas forman parte principalmente de:

| Categoría HTML             | Ejemplos de etiquetas                                                          |
| -------------------------- | ------------------------------------------------------------------------------ |
| **Sección**                | `<main>`, `<header>`, `<footer>`, `<section>`, `<article>`, `<aside>`, `<nav>` |
| **Contenido de flujo**     | `<div>`, `<p>`, `<ul>`, `<form>`, etc.                                         |
| **Contenido incrustado**   | `<img>`, `<video>`, `<iframe>`                                                 |
| **Contenido interactivo**  | `<a>`, `<button>`, `<details>`                                                 |
| **Contenido de metadatos** | `<head>`, `<meta>`, `<title>`                                                  |

## 📚 Elementos de sección (Content Sectioning)

- Estos elementos definen la **estructura del contenido** en bloques lógicos.
- Se dividen a su vez en dos sub-categorías, "No semánticos" y "Semánticos".

### 1️⃣ Elementos no semánticos

- No tienen un significado específico, solo sirven para agrupar contenido.
- Es preferible evitarlos, ya que no le dan información al navegador, sólo se utilizan cuando no hay un elemento semántico adecuado, o para usar con CSS/JS.
  - **`<div>`**: bloque genérico para agrupación de contenido.
  - **`<span>`**: lo mismo, pero en línea.

### 2️⃣ Elementos semánticos

- Tienen un **significado específico** y ayudan a describir la estructura de la página al navegador y a lectores de pantalla.

| Etiqueta    | Significado / Uso                                                             |
| ----------- | ----------------------------------------------------------------------------- |
| `<header>`  | Cabecera de la página o de una sección. Puede contener logo, navegación, etc. |
| `<main>`    | Contenido principal único de la página (solo debe haber uno).                 |
| `<footer>`  | Pie de página o de sección (información legal, enlaces, etc.).                |
| `<nav>`     | Navegación de la página (menús, enlaces internos).                            |
| `<article>` | Contenido independiente (como una entrada de blog o una noticia).             |
| `<section>` | Agrupación temática de contenido.                                             |
| `<aside>`   | Contenido lateral o relacionado (barras laterales, anuncios, etc.).           |
| `<address>` | Información de contacto del autor o dueño del sitio o artículo.               |

## ¿Por qué usar etiquetas semánticas?

- Mejoran la **accesibilidad** (lectores de pantalla entienden mejor el contenido).
- Ayudan al **SEO** (motores de búsqueda interpretan mejor la estructura).
  - Search Engine Optimization - Optimización para Motores de Búsqueda
- Código más limpio, legible, mantenible y escalable.

## Ejemplo

```txt
+----------------------------------------------------------+
|                         <header>                         |
|         Logo, título del sitio, navegación principal     |
+-----------------------------+----------------------------+
|           <main>            |          <aside>           |
|  +----------------------+   |  Contenido extra o         |
|  |     <article>        |   |  relacionado               |
|  +----------------------+   |  (como enlaces, widgets,   |
|  |     <article>        |   |   publicidad, etc.)        |
|  +----------------------+   |                            |
+-----------------------------+----------------------------+
|                         <footer>                         |
|              Información legal o contacto                |
+----------------------------------------------------------+
```

[Volver a Inicio](../../README.md)