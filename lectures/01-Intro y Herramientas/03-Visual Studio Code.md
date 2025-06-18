[Volver a Inicio](../../README.md)

# 🟦 Visual Studio Code

- Podríamos utilizar cualquier otra herramienta: - Block de Notas - Notepad++ - Atom - Brackets - Eclipse - Sublime - Windsurf - VIM, NeoVim - Visual Studio Code
- Página oficial de Visual Studio Code: https://code.visualstudio.com/
- Permite personalizar temas
  - Archivo => Preferencias => Tema => Tema de Color => Monokai
- Permite instalar plugins (Funcionalidades Extra). Algunos plugins útiles:
  - Spanish Language Pack for Visual Studio Code (Microsoft)
  - Code Runner (Jun Han)
  - Auto Rename Tag (Jun Han)
  - Material Icon Theme ( Phillipp Kief)
  - Better Comments (Aaron Bond)
  - Live Server (Ritwick Dey)
- NO Instalar extensiones porque sí, pueden relentizar el programa - A lo largo del curso agregaremos más
- Permite configurar absolutamente todo: Fuente, tamaño, colores, etc.
- Configurar terminal por defecto: - Click en la flecha de despliegue (arriba a la derecha en la terminal)
  - Seleccionar perfil predeterminado - Elegimos "Git Bash"
- Cambiar posición de la terminal:
  - Click derecho sobre "Terminal" => Alinear panel => Elegir posición

## Atajos de teclado
- Interfaz
	- Ampliar: Ctrl + "+"
	- Achicar: Ctrl + "-"
- Selección
	- Selección de múltiples líneas: "Alt + Click"
	- Selección de la siguiente palabra igual a la seleccionada: "Ctrl + D"
	- Seleccionar todas las palabras iguales a la seleccionada: "Ctrl + Shift + L"
	- Selección en cuadrado (no toda la línea, pero en varias líneas):
		- Presionando el botón central del mouse
		- Presionando "Shift + Alt" y seleccionamos con click y desplazando
- Navegación
	- Ir a la línea de código donde se creó una variable: "Ctrl + Click" ó "F12"
	- Ver todas las referencias a una variable:
		- "Click derecho => Go to Reference" ó "Shift + F12"
- Comentarios
	- Comentar línea/s seleccionadas: "Ctrl + k + c"
	- Comentar línea/s seleccionadas: "Ctrl + k + u"
- Edición
	- Copiar selección o línea donde está el cursor: "Ctrl + c"
	- Cortar selección o línea donde está el cursor: "Ctrl + x"
	- Eliminar línea donde está el cursor: "Ctrl + Shift + k"
	- Pegar: "Ctrl + v"
	- Duplicar línea donde se encuentra el cursor: "Alt + Shift + ↑" ó "Alt + Shift + ↓"
- Formato
	- Dar formato al documento: "Shift + Alt + F"
- Ver sugerencias de VSC: "Ctrl + Espacio"

## Configuración de VSC

### Zoom con Ctrl + scroll
- Archivo -> preferencias -> settings
  - Buscar mouse Wheel Zoom y tildar

### Guardado Automático:
- Ve a Archivo (File) > Preferencias (Preferences) > Configuración (Settings) o usa el atajo: Ctrl + , (Windows/Linux) o Cmd + , (Mac).
- En el cuadro de búsqueda escribe: auto save.
- En la opción Files: Auto Save, elige una de las siguientes:
  - off — desactivado
  - afterDelay — guarda después de un tiempo (por defecto 1000ms)
    - Puedes ajustar el retraso en: Files: Auto Save Delay
  - onWindowChange — guarda al cambiar de ventana
  - onWindowChange — guarda al cambiar de enfoque

[Volver a Inicio](../../README.md)