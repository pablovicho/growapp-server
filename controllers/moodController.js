const jwt		= require("jsonwebtoken")
const Mood		= require("./../models/Mood")
const moment    = require("moment")

// CREAR UN MOOD
exports.create = async (req, res) => {
	// 1. OBTENER DATOS DEL FORMULARIO (REQ)
	const {moodEntry, comment, userId} = req.body
// console.log(req)
    const date = new Date()
    const month= moment().format("MMM")
      const day= moment().format("DD")

	// 2A. REALIZAR EL PROCESO ASÍNCRONO
	try {
		// CREAR MOOD EN BASE DE DATOS
		const newMood = await Mood.create({
			moodEntry,
		    comment,    
            date,
            userId,
            month,
            day
		})

	//devolver una respuesta en formato json
res.json({
    msg: "Mood creado con éxito",
    data: newMood
})



	} catch (error) {
	// 2B. EN CASO DE ERROR CON AWAIT
		res.status(500).json({
			msg: "Hubo un error con la creación del Mood",
			error: error
		})
	}
}

exports.readAll =async(req,res) => {
    try{
        const moods = await Mood.find({})
        res.json({
            msg:"Moods obtenidos",
            data:moods
        })
    }catch(error){
        res.status(500).json({
            msg:"hubo un error obteniendo los datos",
            error:error
        })
    }
    }

exports.edit = async(req,res) => {
    const {id} = req.params
    // const {}
    const {moodEntry, comment} = req.body 
    try {
        const updatedMood = await Mood.findByIdAndUpdate(
            id,
            {moodEntry, comment}, //también necesito traer la fecha, cierto? pero sin editarla
            {new: true})

            res.json({
                msg:"Mood actualizado con éxito",
                data: updatedMood
            })
        } catch(error){
            res.status(500).json({
                msg:"Hubo un error en la actualización del Mood",
                error
            })
        }
}

exports.delete = async(req,res) => {
    const {id} = req.params
    try {
        const deletedMood = await Mood.findByIdAndDelete({_id:id})
        res.json({
            msg:"Mood borrado con éxito",
            data:deletedMood
        })
    } catch(error){
        res.status(500).json({
            msg:"Hubo un error en la actualización del Mood",
            error
        })
    }
}

exports.readOne = async(req,res) => {
    const {id} = req.params
    try {
        const mood = await Mood.findById(id)
        res.json({
            msg:"Mood obtenido con éxito",
            data:mood
        })
    } catch(error) {
        res.status(500).json({
        msg:"hubo un error obteniendo los datos",
        error:error
    })
}
}