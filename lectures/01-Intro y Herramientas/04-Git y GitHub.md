[Volver a Inicio](../../README.md)

# 🟧 GIT

- Página oficial de Git: https://git-scm.com/
- **Git** es un **sistema de control de versiones**.
- Permite **guardar, rastrear y coordinar cambios** en archivos de un proyecto, especialmente en desarrollo de software.
- ¿Para qué sirve?
  - **Guardar el historial** de cambios (como una "máquina del tiempo").
  - **Colaborar** con otras personas sin pisarse el trabajo.
  - **Volver atrás** si algo falla.
  - **Dividir el trabajo** en ramas (branches) para experimentar sin romper el código principal.
- ¿Qué guarda Git?
  - Git no guarda solo el último estado, **sino cada cambio paso a paso**, como si hicieras "checkpoints" del proyecto.
- ¿Cuándo usar Git?
  - Siempre que estés trabajando en proyectos con:
  - Código fuente (JavaScript, Python, HTML, etc.)
  - Documentos importantes
  - Trabajo colaborativo

## Historia de Git

- **2005**: Git fue creado por **Linus Torvalds**, el mismo creador de **Linux** (kernel).
- ¿Por qué lo hizo? Porque el proyecto del kernel de Linux necesitaba un **sistema de control de versiones rápido, distribuido y confiable**, después de dejar de usar otro sistema llamado **BitKeeper**.
- Git fue diseñado para:
  - Ser **rápido**.
  - Funcionar de manera **distribuida** (cada persona tiene una copia completa del repositorio).
  - Tener un **historial de cambios seguro** e inalterable.
- Evolución
  - Aunque nació como una herramienta interna para el desarrollo del kernel de Linux, Git **se volvió muy popular** y hoy es el estándar en la industria del software.
  - Herramientas como **GitHub**, **GitLab** y **Bitbucket** lo usan como base para facilitar el trabajo en equipo y proyectos colaborativos.

### Comandos básicos de Git

- pwd: Imprime el directorio en donde nos encontramos.
- ls: Imprime archivos y carpetas dentro del cual estamos trabajando.
- mkdir [nombre_carpeta]: Crea una carpeta con el nombre indicado en el directorio donde estamos situados. Si queremos crear una carpeta que lleve espacios en su nombre se debe utilizar comillas, por ejemplo: "PrepCourse Henry".
- cd: Para ir hacia el directorio que contiene la carpeta o directorios en donde nos encontramos. También podemos usarla para movernos entre carpetas, el ".." indica modernos hacia un nivel superior.
- touch [nombre_archivo]: Crea un archivo con el nombre indicado.
- rm [nombre_archivo]: Elimina el archivo indicado.
- rm -r [nombre_carpeta]: Elimina la carpeta indicada.
- clear: Limpiar terminal.

### Verificar instalación de Git

- En la "Consola Bash":

```bash
$ git -v
```

## Abrir carpeta en VSC

- Arrastrar carpeta al VSC, ó Click derecho en carpeta y abrir en VSC
- Abrir Terminal GitBash en el lugar en que queremos:
  - Click derecho en el sitio deseado => "Git Bash Here"
  - `code .` : Abre la carpeta en VSC

## Configurar credenciales de Git

- Revisamos el siguiente link: [Configurar credenciales de Git](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Configurando-Git-por-primera-vez
- Abrimos terminal en Visual Studio Code (Ctrl + ñ):
  - También podríamos hacerlo desde la Consola Bash

```bash
# Configurar credenciales:
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com

# Ver valores de Git (global y local):
git config --list
# Solo nos interesan las últimas dos líneas:

# Ver una configuración específica:
git config user.name
git config user.email
```

# 🟥 GITHUB

- Página oficial de GitHub: https://github.com/

[Volver a Inicio](../../README.md)