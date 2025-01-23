## Version utilizada

- Node.js (v14.18) api
- Node.js (v16.15) client

## Requisitos Previos

- Node.js (v14+)
- npm
- Docker (opcional)
- Docker Compose (opcional)

## Inicio Rápido

### Ejecutar con npm

1. Instalar dependencias en el directorio (raíz, client y api):
```bash
npm install
```

2. Iniciar ambos servicios (raiz):
```bash
npm run start
```

Esto iniciará:

Servidor API en http://localhost:5000
Cliente React en http://localhost:3000

Ejecutar con Docker
1. Construir e iniciar contenedores:

```bash
docker-compose up --build
```

2. Para ejecuciones posteriores:
```bash
docker-compose up
```

# Servicio API
Ubicado en el directorio api.

Características
- Endpoints RESTful para procesamiento de archivos
- Arquitectura basada en componentes para escalabilidad
- Standard.js para estilo de código
- Mocha para pruebas
- Documentación JSDoc

# Endpoints de API
- GET /files/data - Obtener todos los archivos procesados
- GET /files/data?fileName=<filename> - Obtener archivo específico
- GET /files/list - Obtener lista de archivos sin procesar de API externa

# Pruebas
```bash
cd api
npm test
```

# Servicio Cliente
Ubicado en el directorio client.

Características
- Aplicación React con interfaz Bootstrap
- Redux para gestión de estado
- Suite de pruebas Jest
- Manejo de errores con notificaciones Toast

Pruebas
```bash
cd client
npm test
```

Stack Tecnológico
Backend
- Node.js
- Express
- Standard.js
- Mocha
- Docker
- jsdoc

Frontend
- React
- Redux
- Bootstrap
- Jest
- Docker

## Configuración Docker
Tres configuraciones de Dockerfile:

- Dockerfile - Configuración servicio API
- Dockerfile - Configuración servicio Cliente
- docker-compose.yml - Orquestación de servicios

# Scripts Disponibles

Directorio raíz:

- npm run start - Iniciar ambos servicios
- npm run start:api - Iniciar servicio API
- npm run start:client - Iniciar servicio Cliente

# Directorio API:

- npm test - Ejecutar pruebas API
- npm start - Iniciar servicio API
- npm run docs - Generar documentación API

# Directorio Cliente:

- npm test - Ejecutar pruebas cliente
- npm start - Iniciar servicio cliente
- npm run build - Construir versión de producción