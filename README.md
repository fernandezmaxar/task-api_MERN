# 🧩 Task API MERN

> **Versión v1.0.0** – API RESTful para gestión de tareas con autenticación de usuarios.  
> Desarrollada con **Node.js**, **Express**, **MongoDB** y **JWT**, siguiendo buenas prácticas de arquitectura y control de versiones.

---

## 🚀 Tecnologías principales

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github)

---

## 📖 Descripción general

**Task API MERN** es una API que permite a los usuarios:
- Registrarse e iniciar sesión de forma segura (con **JWT**)
- Crear, leer, actualizar y eliminar (**CRUD**) sus tareas personales
- Gestionar la autenticación mediante middlewares
- Mantener una arquitectura modular y escalable

Diseñada bajo un enfoque profesional de desarrollo colaborativo, utilizando flujos de trabajo con ramas `develop`, `feature`, `release` y `hotfix`.

---

## 🏗️ Arquitectura del proyecto

```
task-api_MERN/
├── config/         # Configuración general (DB, entorno, etc.)
├── controllers/    # Controladores de autenticación y tareas
├── middleware/     # Middlewares de validación y autenticación
├── models/         # Modelos Mongoose (User, Task)
├── routes/         # Definición de rutas REST
├── app.js          # Inicialización de la aplicación
├── server.js       # Punto de entrada del servidor
├── .env.example    # Variables de entorno de ejemplo
└── package.json    # Dependencias y scripts
```

---

## ⚙️ Instalación y configuración

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/fernandezmaxar/task-api_MERN.git
cd task-api_MERN
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar variables de entorno
Crea un archivo `.env` basado en `.env.example` y agrega tus valores:
```bash
PORT=5000
MONGO_URI=tu_cadena_de_conexion_mongo
JWT_SECRET=tu_clave_secreta_jwt
```

### 4️⃣ Iniciar el servidor
```bash
npm run dev
```
El servidor correrá en [http://localhost:5000](http://localhost:5000)

---

## 📚 Endpoints principales

### 🔐 Autenticación (`/api/auth`)
| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| POST | `/register` | Registra un nuevo usuario |
| POST | `/login` | Inicia sesión y devuelve un token JWT |

### ✅ Tareas (`/api/tasks`)
| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| GET | `/` | Obtiene todas las tareas del usuario autenticado |
| POST | `/` | Crea una nueva tarea |
| PUT | `/:id` | Actualiza una tarea existente |
| DELETE | `/:id` | Elimina una tarea |

---

## 🧩 Convenciones de desarrollo

**Flujo de ramas (Git Flow):**
- `main`: versión estable y lista para producción  
- `develop`: rama base de desarrollo  
- `feature/*`: nuevas funcionalidades  
- `release/*`: preparación de versiones  
- `hotfix/*`: correcciones urgentes en producción  

**Convención de commits:**
- `feat:` → nueva funcionalidad  
- `fix:` → corrección de errores  
- `chore:` → tareas menores o configuración  
- `docs:` → documentación  
- `refactor:` → refactorización de código

---

## 👨‍💻 Autores

**Desarrollado por:**
- [@fernandezmaxar](https://github.com/fernandezmaxar)
- [@lanusroots](https://github.com/lanusroots)

---

## 🧾 Licencia

Este proyecto está bajo la licencia MIT.  
Podés usarlo, modificarlo y distribuirlo libremente con los debidos créditos.

---
✨ *Proyecto creado con enfoque profesional para simular un entorno de desarrollo real (MERN stack).*
