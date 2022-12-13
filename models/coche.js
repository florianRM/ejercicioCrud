const { Schema, model } = require('mongoose');

const CocheSchema = Schema({
    marca: {
        type: String,
        required: ['true', 'La marca es obligatoria'] 
    },
    modelo: {
        type: String,
        required: ['true', 'El modelo es obligatorio']
    },
    year: {
        type: String,
        required: ['true', 'El año es obligatorio']
    }
});


module.exports = model( 'Coche', CocheSchema );