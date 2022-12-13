const coche = require('../models/coche')
const Rol = require('../models/rol')
const User = require('../models/usuario')

const isValidRol = async (rol = '')=> {
	const existeRol = await Rol.findOne({ rol })
		  if (!existeRol) {
			  throw new Error(`Rol ${rol} not exists in database`)
		  }
}

const existsEmail = async (email) => {

	const emailDb = await User.findOne({ email});
		if (emailDb) {
			throw new Error(`Email ${email} already exists in database`)
		}
}

const existsUser = async (id) => {
	const idDb = await User.findById(id);
	if (!idDb) {
		throw new Error(`User with id ${id} doesn't exist`)
	}
}

const existCar = async (id) => {
	const cocheId = await coche.findById(id);
	if(!cocheId) {
		throw new Error(`El coche con id ${id} no existe`);
	} 
}

module.exports = { isValidRol, existsEmail, existsUser, existCar}