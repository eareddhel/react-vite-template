# PWA Template 1.0

Template base React optimizado para el estándar **CEDS**.

## 🛠 Stack Tecnológico
- **Frontend:** React + Vite + TypeScript.
- **Estilos:** Tailwind CSS v4 + Shadcn UI (Radix).
- **Backend compatible:** XAMPP 8.2.12+
- **Gestor de paquetes:** pnpm.

## 📋 Estándares de Desarrollo
- **Tabulaciones:** 2 espacios.
- **Comentarios:** Siempre en minúsculas.
- **Seguridad:** POST para envío de datos, sesiones PHP activas y Política de Privacidad Estricta.
- **CSS:** Estilos globales en `src/global.css`, componentes UI en `src/components/ui`.

## Documentación
/docs/
- **CSS:** Estilos globales en `src/global.css`, componentes UI en `src/components/ui`.

## 🚀 Instalación en equipo nuevo
1. Clonar repositorio o "Use this template".
2. Ejecutar instalación de dependencias:
   ```bash
   pnpm install
3. Iniciar servidor de desarrollo:
   ```bash
   pnpm dev

## Proceso de Replicación (Paso a Paso)
1.  **Instalar Herramientas Base:** Instalar Node.js, Git y XAMPP (versión con PHP).
2.  **Habilitar pnpm:** Abre la terminal y escribe `corepack enable` o `npm install -g pnpm`.
3.  **Clonar y Configurar:**
    * `git clone [URL_DE_TU_REPO]`
    * `cd citapp`
    * `pnpm install`
4.  **Verificación:** Ejecuta `pnpm dev`. Si el panel de "Problemas" en VS Code marca **0**, la configuración de TypeScript y los alias de ruta (`@/`) están operando correctamente.

## Estructura del proyecto
   ```bash
react-vite-template/
├── docs/                     # documentación del proyecto
├── node_modules/             # dependencias instaladas por pnpm (no se sube al repo)
├── public/                   # activos estáticos que se copian tal cual a la raíz en la build
│   ├── .well-known/          # directorio para estándares de descubrimiento web
│   │   └── security.txt      # contacto y políticas para investigadores de seguridad
│   ├── favicon.ico           # icono de la pestaña del navegador
│   ├── robots.txt            # instrucciones para rastreadores y exclusión de /api/
│   └── manifest.webmanifest  # configuración para que la pwa sea instalable
├── sql/                      # respaldos de bd e historial de migraciones
├── src/                      # código fuente de la aplicación
│   ├── api/                  # scripts para conectar con tus archivos php
│   ├── assets/               # imágenes, fuentes y archivos multimedia locales
│   ├── components/           # componentes reutilizables de la interfaz
│   │   ├── ui/               # componentes base de shadcn (button, table, etc.)
│   │   └── shared/           # componentes propios (navbar, footer, sidebar)
│   ├── hooks/                # lógica personalizada de react (ej. manejar sesiones php)
│   ├── layouts/              # estructuras maestras de página (ej. dashboard layout)
│   ├── lib/                  # utilidades externas y configuración de shadcn (utils.ts)
│   ├── pages/                # vistas completas de la aplicación (vistas de usuario)
│   ├── services/             # lógica de peticiones post y procesamiento de datos ceds
│   ├── types/                # definiciones y contratos de interfaces typescript (.d.ts)
│   ├── App.tsx               # componente raíz que orquestra las rutas y estados globales
│   ├── global.css            # estilos globales y configuración de temas tailwind v4
│   └── main.tsx              # punto de montaje de react en el dom (id="root")
│
├── .env.example              # archivo de variables de entorno de ejemplo. nunca subir con datos reales al repo
├── .gitignore                # archivos y carpetas excluidos del control de versiones git
├── components.json           # configuración de shadcn ui para la instalación de componentes
├── eslint.config.js          # reglas de linter para mantener la calidad del código js/ts
├── index.html                # plantilla html principal de la aplicación
├── package.json              # manifiesto del proyecto, scripts y lista de dependencias
├── pnpm-lock.yaml            # registro exacto de versiones de dependencias para replicación
├── pnpm-workspace.yaml       # configuración de espacio de trabajo y permisos de ejecución
├── postcss.config.js         # configuración del procesador de estilos para tailwind
├── tsconfig.json             # configuración principal del compilador de typescript
├── tsconfig.node.json        # configuración de typescript específica para el entorno de vite
└── vite.config.ts            # configuración del motor de desarrollo y alias de rutas (@)