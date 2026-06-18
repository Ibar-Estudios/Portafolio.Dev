# portafolio.dev — Ibar Exequiel Caubet

Portafolio personal desarrollado con **Next.js 15**, **React 19** y **Tailwind CSS v4**. Diseño oscuro minimalista orientado a developer, con terminal animada, animaciones de entrada y navegación SPA sin recarga de página.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 15 (Pages Router) |
| UI | React 19 |
| Estilos | Tailwind CSS v4 + CSS custom properties |
| Tipografía | next/font/google (Space Grotesk · Inter · JetBrains Mono) |
| Íconos | react-icons |
| Deploy | Vercel |

## Estructura del proyecto

```
src/
├── pages/
│   ├── index.js          # SPA controller — maneja navegación entre secciones
│   └── _app.js           # Fuentes globales vía next/font
├── components/
│   ├── Navbar.jsx         # Barra de navegación fija con blur
│   ├── Home.jsx           # Hero: terminal + tagline + CTAs + stack badges
│   ├── AnimatedTerminal.jsx  # Terminal con efecto typewriter
│   ├── About.jsx          # Foto + bio + skills grid + timeline de experiencia
│   ├── Projects.jsx       # Grid de tarjetas de proyectos
│   ├── Contact.jsx        # Formulario mailto + links sociales
│   └── Footer.jsx         # Íconos sociales
├── data/
│   ├── projects.js        # Proyectos como datos puros
│   ├── skills.js          # Habilidades por categoría + stack badges
│   └── experience.js      # Experiencia laboral
└── styles/
    └── global.css         # Tailwind + variables CSS + clases de animación
```

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/IBAR-CAUBET/portafolio.dev.git
cd portafolio.dev

# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo con Turbopack
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting con ESLint
```

## Secciones

- **Inicio** — Terminal animada con datos del developer, tagline y links de acción
- **Sobre mí** — Presentación, stack de habilidades y timeline de experiencia laboral
- **Proyectos** — Cards de proyectos con links a demos en vivo y repositorios
- **Contacto** — Formulario funcional (mailto) y links directos a redes

## Proyectos destacados

| Proyecto | Stack | Estado |
|----------|-------|--------|
| [FinTrack](https://fin-track-deploy-sooty.vercel.app) | React · Node.js · MongoDB · JWT | ✅ Producción |
| [Kairos](https://proyecto-ux-ui-deploy.vercel.app) | React · Express · MongoDB Atlas | ✅ Producción |
| Trading Info Site | HTML · CSS | GitHub |
| OriginDev | React · Next.js (grupal) | GitHub |

## Contacto

- **LinkedIn** — [ibar-caubet-0571873a1](https://www.linkedin.com/in/ibar-caubet-0571873a1/)
- **GitHub** — [@IBAR-CAUBET](https://github.com/Ibar-Estudios)
- **Email** — exequielcaubet@gmail.com
- **Instagram** — [@ibar_caubet](https://www.instagram.com/ibar_caubet/)

---

*Villa Astolfi-Pilar, Buenos Aires 🇦🇷*
