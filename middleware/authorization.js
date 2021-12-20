const jwt = require("jsonwebtoken")
const decrypt = async (req, res, next) => {
	// CAPTURAR EL TOKEN Y GUARDARLO EN UNA VARIABLE
	// res.header()('Access-Control-Allow-Origin', '*')
	const token = req.header("x-auth-token")
	// SI NO HAY TOKEN
	if(! token){
		return res.status(401).json({
			msg: "No hay token, permiso no válido."
		})
	}
	// SI SÍ HAY TOKEN Y TODO BIEN...
	try {
		const openToken = await jwt.verify(token, process.env.SECRET)
		console.log("openToken", openToken)
		req.user = openToken.user
		next()

	} catch (error) {	
		console.log(error)
		res.json(
			{
				msg: "Hubo un error con el token."
			}
		)
	}
}

module.exports = decrypt