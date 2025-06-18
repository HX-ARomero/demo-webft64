# Incompatibilidad de salto de línea

[Volver a Inicio](../../README.md)

La incompatibilidad de salto de línea (caracter de fin de línea) entre Windows y Linux es un problema común al trabajar con Git y proyectos colaborativos.

Es un tema avanzado, por lo que sólo lo incluyo aquí para que lo tengas como referencia en un futuro.

## 🧩 ¿Cuál es el problema?

Windows usa CRLF (\r\n) como fin de línea.

Linux/macOS usa LF (\n) como fin de línea.

Cuando se colabora entre diferentes sistemas operativos, Git puede detectar cambios de fin de línea aunque el contenido no haya cambiado, generando ruido en los commits o conflictos.

## ✅ Solución con Git: configurar core.autocrlf

Git tiene una opción para manejar automáticamente los saltos de línea según tu sistema:

🔹 En Windows (convertir LF → CRLF al hacer checkout, y CRLF → LF al hacer commit):

```bash
git config --global core.autocrlf true
```

🔹 En Linux/macOS (usar solo LF en todo momento):

```bash
git config --global core.autocrlf input
```

🔹 Para desactivar la conversión:

```bash
git config --global core.autocrlf false
```

🔐 Evitar conflictos en proyectos compartidos

1. 📄 Crea un archivo .gitattributes en la raíz del proyecto:

```.gitattributes
* text=auto
```

Este le dice a Git que detecte los archivos de texto y normalice los finales de línea.
O, para mayor control:

```.gitattributes
# Archivos de código
*.js text eol=lf
*.html text eol=lf
*.css text eol=lf
```

# Archivos de Windows (por ejemplo .bat)

\*.bat text eol=crlf 2. 🔄 Normaliza los archivos ya existentes (una vez configurado):

```.bat
git add --renormalize .
git commit -m "Normalización de saltos de línea"
```

## 📌 Recomendación general

Usa .gitattributes para mantener consistencia entre desarrolladores.

Configura core.autocrlf adecuadamente según tu sistema.

Usa un editor como VS Code, que puede mostrar y convertir fácilmente los finales de línea (LF / CRLF abajo a la derecha de cada archivo que se encuentra en primer plano).

[Volver a Inicio](../../README.md)