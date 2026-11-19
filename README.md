# Taller de GitHub: nuestro grupo

Página del grupo donde cada persona agrega su propia tarjeta con HTML, CSS y jQuery.
Con este proyecto practicas fork, clone, rama, commit, push y Pull Request.

## Estructura

```
taller-github/
├── index.html           Página del grupo
├── estudiantes.js       Lista de personas del grupo
├── css/style.css        Estilos compartidos
├── js/app.js            jQuery: crea las tarjetas y el buscador
└── estudiantes/
    ├── _plantilla/      Tu punto de partida (no la edites)
    └── ejemplo/         Tarjeta de ejemplo ya completa
```

## Tu tarea

1. Haz **fork** de este repositorio en GitHub.
2. **Clona** tu fork: `git clone https://github.com/TU-USUARIO/taller-github.git`
3. Entra a la carpeta y crea tu rama: `git switch -c pagina-tunombre`
4. Copia la plantilla con tu nombre, en minúsculas y sin espacios ni acentos:
   - Git Bash, macOS y Linux: `cp -r estudiantes/_plantilla estudiantes/tunombre`
   - PowerShell: `Copy-Item -Recurse estudiantes/_plantilla estudiantes/tunombre`
5. Abre `estudiantes/tunombre/perfil.js` y cambia tus datos: nombre, emoji, frase, gustos y color.
6. Abre `estudiantes/tunombre/index.html` en el navegador (doble clic) y comprueba tu tarjeta.
7. Guarda tu trabajo:
   ```
   git add estudiantes/tunombre
   git commit -m "Agrega la tarjeta de TuNombre"
   git push -u origin pagina-tunombre
   ```
8. En GitHub abre un **Pull Request** hacia el repositorio original.

## Reglas

- Trabaja solo dentro de tu carpeta `estudiantes/tunombre`. Así los Pull Requests de todos no chocan.
- No edites `_plantilla` ni `ejemplo`.
- Cuando tu Pull Request se integre, tu tarjeta aparecerá en la página del grupo (la persona que modera agrega tu línea a `estudiantes.js`).

## Retos

- **Personaliza:** cambia `script.js` o `estilo.css` dentro de tu carpeta. Por ejemplo, agrega un botón nuevo con jQuery.
- **Conflictos (en parejas):** las dos personas cambian la línea `--color-acento` de `css/style.css`, en ramas distintas, y luego hacen merge. Resuelvan el conflicto.
- **Publica:** activa GitHub Pages en Settings > Pages y comparte el enlace de tu tarjeta.
