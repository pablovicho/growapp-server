**Estructura del server**

Siguiendo un patrón modular, las distintas funciones en el repositorio del servidor están divididas en distintas carpetas:
1. config tiene la configuración de la base de datos en MONGODB
2. models tiene los modelos, utilizando un Schema
3. controllers tiene las funciones de controlador de los modelos para realizar el CRUD
4. routes tiene las rutas parciales de cada elemento(para realizar el CRUD)
5. y todo esto se combina en el index.js, que utiliza la base de datos, las rutas, y exporta todo a través de archivos json

**Autorización**

La autorización se realiza a través de un middleware llamado authorization.js. La autorización se realiza con tokens: si existe un token en el header, se utiliza su información para desplegar la información del usuario, y otorga los permisos correspondientes

**Dependencias**

Para el servidor, utilizo las siguientes dependencias: "bcryptjs": "^2.4.3",
"cors": "^2.8.5",
"dotenv": "^10.0.0",
"express": "^4.17.2",
"jsonwebtoken": "^8.5.1",
"mongoose": "^6.1.2"