# Franco Venesia · Portafolio

Portafolio personal de **Franco Venesia**, desarrollador Full Stack en Rosario, Argentina.
Sitio estático hecho con HTML, CSS y JavaScript puros (sin frameworks ni paso de build).

🔗 **Sitio:** https://francovenesia.vercel.app

## Características

- Diseño oscuro con _glassmorphism_, fondo animado (aurora + partículas que reaccionan al mouse).
- **Modo claro/oscuro** y **traducción ES/EN**; ambos se recuerdan con `localStorage`.
- Burbujas de herramientas sobre la foto que rebotan entre sí (con una pequeña física propia).
- Sección de **servicios** con panel de detalle, duración y herramientas por servicio.
- Línea de tiempo de metodología en zigzag con guía que baja con el scroll.
- Galería de **certificados** con ampliado animado (técnica FLIP) y lightbox en móvil.
- Formulario de contacto con envío real mediante [FormSubmit](https://formsubmit.co) y respaldo por `mailto`.
- Responsive (escritorio, tablet y celular), accesible por teclado y con `prefers-reduced-motion`.
- Metadatos Open Graph / Twitter para compartir el link con vista previa.

## Estructura

```
.
├── index.html            # Estructura y contenido de la página
├── css/
│   ├── variables.css     # Tokens de diseño (colores, radios, tema oscuro/claro)
│   ├── base.css          # Reset, tipografía, fondo, layout, vidrio y reveal
│   ├── animations.css    # @keyframes
│   ├── components.css    # Botones, chips, etiquetas
│   ├── nav.css           # Navegación, botones de idioma/tema y tooltips
│   ├── sections/         # Un archivo por sección (hero, about, services, ...)
│   ├── theme-light.css   # Ajustes del modo claro
│   └── responsive.css    # Media queries y movimiento reducido
├── js/
│   ├── theme-init.js     # Aplica el tema guardado antes del primer pintado
│   ├── config.js         # Estado global y helpers de localStorage
│   ├── data/             # Datos: habilidades, certificados, servicios y traducciones
│   ├── i18n.js           # Motor de traducción ES ↔ EN
│   ├── menu.js, skills.js, certificates.js, services.js, ...  # Una función por archivo
│   └── main.js           # Arranque (aplica tema e idioma guardados)
├── assets/img/           # Imágenes (foto, capturas, certificados, favicon, CV)
├── robots.txt
└── sitemap.xml
```

Los scripts son **clásicos con `defer`**: se ejecutan en el orden en que aparecen en `index.html`
y comparten el ámbito global. Por eso el orden de las etiquetas `<script>` importa.

## Cómo correrlo en local

Con la extensión **Live Server** de VS Code (clic derecho en `index.html` → _Open with Live Server_)
o con cualquier servidor estático:

```bash
npx serve .
```

## Imágenes necesarias en `assets/img/`

| Archivo | Uso |
| --- | --- |
| `fotoperfil traje.webp` | Foto del inicio |
| `favicon-PortafolioFranco.png` | Favicon |
| `og-portafolio.jpg` | Vista previa al compartir (1200×630, incluida) |
| `FrancoVenesia_CV.pdf` | Botón "Descargar CV" |
| `Pasos de acero landing.png`, `Parrucchiere turnos.png` | Capturas de las demos |
| `e-commerce gerardino pastas.webp`, `gastos del mes.webp` | Capturas de los proyectos de cursada |
| `Carrera Full Stack.png`, `Carrera Backend.png`, `CertificadoCarrera de Desarrollo Frontend React.webp`, `CertificadoReactJS.webp`, `CertificadoJavaScript.webp`, `Certificado de SQL.png`, `Certificado de Backend III.png`, `Certificado de Backend II.png`, `Certificado de Backend I.png`, `CertificadoDesarrolloWeb.webp` | Certificados |

Los nombres deben coincidir exactamente (incluidos espacios y mayúsculas).
Si un certificado falta, simplemente se oculta de la galería.

## Cómo editar el contenido

| Quiero cambiar... | Archivo |
| --- | --- |
| Textos de las secciones (ES) | `index.html` |
| Traducción al inglés de esos textos | `js/data/translations.js` |
| Servicios (textos, duración, herramientas) | `js/data/services.js` |
| Habilidades | `js/data/skills.js` |
| Certificados y su orden | `js/data/certificates.js` |
| Frases que se escriben en el inicio | `js/config.js` |
| Colores del tema | `css/variables.css` |

> Para que un texto nuevo se traduzca, la clave de `translations.js` debe ser el texto exacto en español.

## Despliegue en Vercel

1. Subí este proyecto a un repositorio de GitHub.
2. En Vercel: **Add New… → Project** e importá el repositorio.
3. En _Project Name_ escribí `francovenesia` (define la URL `francovenesia.vercel.app`).
4. _Framework Preset_: **Other**. No hace falta comando de build ni carpeta de salida.
5. **Deploy**.

Si cambiás el dominio, actualizá la URL en `index.html` (`canonical`, `og:url`, `og:image`, `twitter:image`),
`robots.txt` y `sitemap.xml`.

## Formulario de contacto

El formulario envía los mensajes a través de FormSubmit al correo configurado en `js/contact-form.js`.
La primera vez FormSubmit pide confirmar el correo desde un mail de activación.
Si la red falla, se abre el cliente de correo del visitante como respaldo.

## Licencia

© Franco Venesia. Todos los derechos reservados.
