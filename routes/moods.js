const express	= require("express")
const router	= express.Router()	
const moodController	= require("./../controllers/moodController")

// 2. ROUTER
// CREAR USUARIO
router.post("/create", moodController.create)
router.get("/readone/:id", moodController.readOne)
router.get("/readall", moodController.readAll)
router.put("/edit/:id", moodController.edit)
router.delete("/delete/:id", moodController.delete)

// 3. EXPORTACIÓN
module.exports = router