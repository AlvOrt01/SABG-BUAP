# SABG-BUAP

Plataforma web del proyecto SABG-BUAP.

Actualmente el proyecto incluye:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Better Auth
- Prisma ORM
- PostgreSQL
- Docker
- Dashboard Shell reutilizable
- Dashboard municipal
- Autenticación con email y contraseña
- Protección de rutas municipales

---

# Requisitos

Antes de comenzar, instala:

- Git
- Docker Desktop
- Node.js 22
- npm

Se recomienda utilizar NVM para administrar las versiones de Node.js.

## Node.js

El proyecto utiliza Node.js 22.

Si utilizas NVM:

```bash
nvm install 22
nvm use 22
```

Verifica:

```bash
node --version
npm --version
```

Si existe un archivo `.nvmrc`, basta con ejecutar:

```bash
nvm use
```

---

# Clonar el repositorio

Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Entra al proyecto:

```bash
cd sabg-buap
```

---

# Instalar dependencias

Ejecuta:

```bash
npm install
```

Esto instalará las dependencias definidas en `package.json`.

---

# Variables de entorno

Copia el archivo de ejemplo:

```bash
cp .env.example .env
```

El archivo `.env` debe contener como mínimo:

```env
DATABASE_URL="postgresql://user:admin@localhost:5432/postgres?schema=public"

BETTER_AUTH_URL="http://localhost:3000"

BETTER_AUTH_SECRET="COLOCA_AQUI_UN_SECRET_DE_AL_MENOS_32_CARACTERES"
```

Puedes generar un secret para Better Auth mediante:

```bash
openssl rand -base64 32
```

Better Auth utiliza `BETTER_AUTH_SECRET` para cifrado y firma, y recomienda una clave de alta entropía de al menos 32 caracteres.

> Nunca subas `.env` al repositorio.

---

# PostgreSQL con Docker

El entorno de desarrollo utiliza:

```text
PostgreSQL 15.3
```

Puedes descargar manualmente la imagen:

```bash
docker pull postgres:15.3
```

Sin embargo, Docker Compose también descargará automáticamente la imagen si todavía no existe.

---

# Docker Compose

El proyecto incluye un archivo:

```text
docker-compose.yaml
```

La configuración actual utiliza PostgreSQL 15.3.

Ejemplo:

```yaml
version: "3"

services:
  todosDB:
    image: postgres:15.3
    container_name: sabg-buap
    restart: always

    ports:
      - "5432:5432"

    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=admin

    volumes:
      - ./postgres:/var/lib/postgresql/data
```

Levanta la base de datos mediante:

```bash
docker compose up -d
```

Comprueba que el contenedor esté activo:

```bash
docker ps
```

Deberías encontrar el contenedor:

```text
sabg-buap
```

Para detenerlo:

```bash
docker compose down
```

Para consultar los logs:

```bash
docker compose logs -f
```

---

# Prisma

El proyecto utiliza Prisma ORM para acceder a PostgreSQL.

El esquema se encuentra en:

```text
prisma/schema.prisma
```

## Validar el esquema

```bash
npx prisma validate
```

## Formatear el esquema

```bash
npx prisma format
```

`prisma format` solamente formatea y organiza `schema.prisma`. No modifica la base de datos.

## Generar Prisma Client

```bash
npx prisma generate
```

## Aplicar las migraciones existentes

Para levantar una copia nueva del proyecto utiliza:

```bash
npx prisma migrate deploy
```

Esto aplica todas las migraciones existentes dentro de:

```text
prisma/migrations/
```

## Crear una nueva migración durante desarrollo

Cuando se modifique `schema.prisma`:

```bash
npx prisma migrate dev --name nombre_de_la_migracion
```

Ejemplo:

```bash
npx prisma migrate dev --name add_municipality
```

Las migraciones de Prisma sí deben subirse a Git.

---

# Modelos de autenticación

Better Auth utiliza actualmente los siguientes modelos:

```text
User
Session
Account
Verification
```

Estos modelos se encuentran en:

```text
prisma/schema.prisma
```

Después de ejecutar las migraciones, PostgreSQL tendrá las tablas:

```text
user
session
account
verification
_prisma_migrations
```

---

# Better Auth

La configuración del servidor se encuentra en:

```text
lib/auth.ts
```

El cliente de React se encuentra en:

```text
lib/auth-client.ts
```

La conexión de Prisma se encuentra en:

```text
lib/prisma.ts
```

La ruta API de Better Auth se encuentra en:

```text
app/api/auth/[...all]/route.ts
```

El endpoint base es:

```text
/api/auth/*
```

---

# Usuario de desarrollo

El proyecto incluye un script temporal para crear un usuario de desarrollo:

```text
scripts/create-dev-user.ts
```

Para ejecutarlo:

```bash
npx tsx scripts/create-dev-user.ts
```

Este script sirve únicamente para desarrollo local.

No debe utilizarse como mecanismo de creación de usuarios en producción.

El flujo final de SABG-BUAP será administrado desde el propio sistema.

---

# Ejecutar la aplicación

Levanta el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

Login:

```text
http://localhost:3000/auth/login
```

Dashboard municipal:

```text
http://localhost:3000/municipal/dashboard
```

---

# Autenticación

El login utiliza Better Auth:

```text
Email + contraseña
        ↓
Better Auth
        ↓
Prisma
        ↓
PostgreSQL
        ↓
Session
```

Si las credenciales son válidas, el usuario es enviado a:

```text
/municipal/dashboard
```

Las rutas dentro de:

```text
/municipal/*
```

requieren una sesión válida.

Si el usuario intenta entrar sin autenticarse:

```text
/municipal/dashboard
        ↓
/auth/login
```

---

# Dashboard Shell

Los dashboards utilizan componentes compartidos ubicados en:

```text
components/dashboard/
```

Actualmente incluye:

```text
dashboard-header.tsx
dashboard-sidebar.tsx
dashboard-shell.tsx

progress/
├── workflow-progress.tsx
└── chapter-progress.tsx
```

Estos componentes podrán reutilizarse para:

```text
Municipal
Administrador
Coordinador
Profesor
```

La navegación específica de cada tipo de dashboard se define mediante archivos de configuración.

Actualmente:

```text
config/navigation/municipal-navigation.ts
```

---

# Workflow SABG-BUAP

La configuración del flujo principal está ubicada en:

```text
config/sabg/workflow.ts
```

Actualmente contempla:

```text
Diagnóstico
Ruta
Instrumento
Evidencias
Revisión
Resultado
```

Los componentes de progreso reciben esta configuración dinámicamente.

---

# Estructura principal

```text
sabg-buap/
│
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.ts
│   │
│   ├── auth/
│   │
│   └── municipal/
│       ├── dashboard/
│       │   └── page.tsx
│       └── layout.tsx
│
├── components/
│   └── dashboard/
│       ├── dashboard-header.tsx
│       ├── dashboard-sidebar.tsx
│       ├── dashboard-shell.tsx
│       │
│       └── progress/
│           ├── workflow-progress.tsx
│           └── chapter-progress.tsx
│
├── config/
│   ├── navigation/
│   │   └── municipal-navigation.ts
│   │
│   └── sabg/
│       └── workflow.ts
│
├── lib/
│   ├── auth.ts
│   ├── auth-client.ts
│   ├── permissions.ts
│   └── prisma.ts
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── public/
│
├── scripts/
│   └── create-dev-user.ts
│
├── types/
│   ├── chapter.ts
│   ├── navigation.ts
│   └── workflow.ts
│
├── docker-compose.yaml
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

---

# Flujo para levantar el proyecto desde cero

Después de clonar el repositorio:

```bash
nvm use
```

Instala las dependencias:

```bash
npm install
```

Crea el entorno:

```bash
cp .env.example .env
```

Levanta PostgreSQL:

```bash
docker compose up -d
```

Genera Prisma Client:

```bash
npx prisma generate
```

Aplica las migraciones:

```bash
npx prisma migrate deploy
```

Levanta Next.js:

```bash
npm run dev
```

Opcionalmente crea el usuario de desarrollo:

```bash
npx tsx scripts/create-dev-user.ts
```

Finalmente abre:

```text
http://localhost:3000/auth/login
```

---

# Flujo resumido

```text
git clone
   ↓
nvm use
   ↓
npm install
   ↓
cp .env.example .env
   ↓
docker compose up -d
   ↓
npx prisma generate
   ↓
npx prisma migrate deploy
   ↓
npm run dev
```

---

# Git

Los siguientes archivos/directorios no deben subirse:

```text
.env
.env*.local
node_modules/
.next/
postgres/
```

Las migraciones sí deben subirse:

```text
prisma/migrations/
```

Antes de hacer commit:

```bash
git status
```

---

# Desarrollo

La rama principal es:

```text
main
```

Para nuevas funcionalidades utiliza ramas como:

```text
feat/authentication
feat/municipal-dashboard
feat/database-domain
fix/login-redirect
```

Ejemplo:

```bash
git switch -c feat/nueva-funcionalidad
```

Después:

```bash
git add .
git commit -m "feat: describe la funcionalidad"
git push -u origin feat/nueva-funcionalidad
```