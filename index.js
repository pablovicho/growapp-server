const express 		= require("express")
const app			= express()
const cors			= require("cors")

require("dotenv").config()
const connectDB = require('./config/db')

// 2. MIDDLEWARES
// BASE DE DATOS
connectDB()

//TEMP¨CREAR OPCIONES PARA CORS

const corsOptions ={ //cambiar para despliegue
    origin: 'https://eager-kare-64a130.netlify.app', //'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

// HABILITAR CORS (ACCESOS DE AMBIENTES DE DESARROLLO DE TERCEROS)
app.use(cors(corsOptions));


// TODAS LAS PETICIONES Y RESPUESTAS SE MANEJAN EN PROTOLOCO JSON
app.use(express.json())

// 3. RUTAS
app.use("/users", require("./routes/users"))
app.use("/moods", require("./routes/moods"))

// 4. SERVER
app.listen(process.env.PORT, () => {
	console.log(`Servidor trabajando en ${process.env.PORT}`)
})