# portfolio-pati — CLAUDE.md

Portfolio web profesional de **Patricia Bayona Bultó**, Product Manager & UX Lead con 10+ años de experiencia.
Construido con Next.js 15 App Router + TypeScript + Tailwind CSS.

---

## Propósito del proyecto

Sitio web de portfolio para mostrar la trayectoria profesional de Patricia: sus case studies, skills, experiencia y contacto. Orientado a reclutadores y empresas que buscan PM / UX Lead en Europa (remoto o híbrido).

---

## Stack tecnológico

- **Framework**: Next.js 15.3.1 (App Router)
- **UI**: React 19
- **Lenguaje**: TypeScript 5 (strict: true)
- **Estilos**: Tailwind CSS 3.4 con design system custom
- **Fuentes**: Inter (sans) + Playfair Display (serif) via `next/font/google`
- **Utilidades**: `clsx` + `tailwind-merge` → `~/utils/cn`
- **Sin base de datos**: todos los datos son estáticos en `src/constants/`
- **Sin auth, sin API routes, sin env vars**

---

## Estructura del proyecto

```
src/
├── app/                        # Next.js App Router
│   ├── page.tsx                # Home: hero, stats, featured cases, about teaser
│   ├── cases/
│   │   ├── page.tsx            # Listado de los 6 case studies
│   │   └── [slug]/page.tsx     # Detalle dinámico de cada caso
│   ├── about/page.tsx          # Experiencia, skills, idiomas
│   ├── contact/page.tsx        # Email y teléfono
│   ├── layout.tsx              # Root layout: Nav, Footer, Cursor, ScrollProgress, RevealProvider, PageTransition
│   └── globals.css
├── components/
│   ├── nav.tsx                 # Server Component
│   ├── footer.tsx              # Server Component
│   ├── cursor.client.tsx
│   ├── scroll-progress.client.tsx
│   ├── page-transition.client.tsx
│   ├── reveal-provider.client.tsx   # Context para animaciones de scroll
│   ├── featured-cases-grid.client.tsx
│   ├── home-skills-grid.client.tsx
│   ├── skills-grid.client.tsx
│   ├── languages-personal-grid.client.tsx
│   └── stat-number.client.tsx       # Animación count-up
├── constants/
│   ├── cases.ts                # Array CASES con los 6 case studies completos (tipos: Case, Result, ApproachSection)
│   ├── home.ts                 # FEATURED_CASE_SLUGS (qué casos aparecen en Home)
│   ├── skills.ts               # SKILLS por categorías
│   └── stats.ts                # STATS para el strip numérico del Home
├── hooks/
│   ├── use-count-up.ts
│   └── use-reveal-on-scroll.ts
└── utils/
    └── cn.ts                   # classname merge (clsx + tailwind-merge)
```

---

## Convenciones de código

- **Client Components**: sufijo `.client.tsx`. Usar `'use client'` solo cuando sea necesario.
- **Server Components por defecto**: sin directiva, sin sufijo.
- **Hooks**: prefijo `use-`, kebab-case: `use-reveal-on-scroll.ts`
- **Imports de tipos**: siempre con `import type { ... }`
- **Alias de paths**: `~/` apunta a `src/`. Usar siempre en lugar de rutas relativas.
- **cn()**: usar `cn()` de `~/utils/cn` para clases condicionales de Tailwind.
- **Named exports** en componentes. `export default` solo en pages/layouts (convención Next.js).
- **Sin console.log** en producción. Solo `console.error` donde sea necesario.

---

## Design system

Definido en `tailwind.config.ts`. Colores principales:

| Token     | Hex       | Uso                        |
|-----------|-----------|----------------------------|
| `paper`   | `#F6F5F0` | Fondo principal            |
| `ink`     | `#131310` | Texto principal            |
| `accent`  | `#6667AB` | Color de acento / CTA      |
| `border`  | `#E0DFD7` | Bordes y separadores       |
| `surface` | `#EDECEA` | Fondos de cards/secciones  |

Animaciones custom definidas en Tailwind: `animate-fade-up`, `animate-fade-in`, `animate-count-in`, `animate-gradient-breathe`.

Clases utilitarias clave (definidas en `globals.css` o Tailwind config):
- `section-label` — etiqueta pequeña uppercase de secciones
- `reveal` / `reveal-far` — activadas por `RevealProvider` para animaciones al hacer scroll
- `bg-gradient-primary`, `bg-gradient-secondary`

---

## Datos: case studies

Los 6 case studies están en `src/constants/cases.ts` como array `CASES: Case[]`.

| Slug                  | Empresa       | Rol                         |
|-----------------------|---------------|-----------------------------|
| `mylink-portal`       | LINK Mobility | VP of UX & Product Manager  |
| `ux-system`           | —             | —                           |
| `roadmap`             | —             | —                           |
| `engage-gtm`          | —             | —                           |
| `alqua-pricing`       | Alqua         | Co-Founder                  |
| `alqua-digital-index` | Alqua         | Co-Founder                  |

El tipo `Case` incluye: `slug`, `number`, `title`, `subtitle`, `tags`, `company`, `role`, `timeline`, `intro`, `situation[]`, `approach[]` (con `ApproachSection`), `results[]` (con `Result`), `learned[]`, `learnedQuote?`.

Los casos destacados en Home se controlan en `src/constants/home.ts` (array `FEATURED_CASE_SLUGS`).

---

## Estado actual

- **Rama activa**: `feature/cases-redesign`
- **Estado git**: working tree limpio (sin cambios sin commitear)
- **Ramas**: `main`, `feature/design` (mergeada via PR #1), `feature/cases-redesign` (activa)
- **Último commit**: `first version` (en rama actual)

### Lo que está hecho
- [x] Home completa: hero, stats strip, featured cases, quote block, about teaser
- [x] Listado de cases (`/cases`) con hover animations
- [x] Detalle de case study dinámico (`/cases/[slug]`)
- [x] Página About con skills y experiencia
- [x] Página Contact
- [x] Cursor personalizado
- [x] Scroll progress bar
- [x] Page transitions
- [x] Animaciones de scroll reveal
- [x] Diseño responsive mobile-first
- [x] 6 case studies con contenido completo

### Lo que falta / posibles mejoras
- [ ] `loading.tsx` con skeletons en rutas con fetch async
- [ ] `error.tsx` como boundary por ruta
- [ ] SEO: og:image, twitter cards por caso
- [ ] Favicon personalizado
- [ ] Deploy a producción (Vercel)
- [ ] README.md

---

## Cómo ejecutar

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # build de producción
npm run start     # servidor de producción local
```

No hay variables de entorno necesarias. El proyecto es completamente estático.

---

## Notas para agentes

- **No hay base de datos**. Todos los datos viven en `src/constants/`. Para añadir o modificar contenido, editar esos archivos.
- **No crear archivos `.md`** salvo que se pidan explícitamente.
- **No añadir dependencias** sin justificación clara. El proyecto intencionalmente tiene pocas deps.
- **Para añadir una nueva página**: crear `src/app/[ruta]/page.tsx` como Server Component por defecto.
- **Para añadir un componente con estado/efectos**: crear en `src/components/` con sufijo `.client.tsx` y directiva `'use client'`.
- **Para añadir un case study**: añadir entrada al array `CASES` en `src/constants/cases.ts` siguiendo el tipo `Case`.
- **Commits**: mensajes en inglés, concisos, en imperativo (`Add`, `Fix`, `Update`).
