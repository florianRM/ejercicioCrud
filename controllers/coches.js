const { request, response } = require('express');
const Coche = require('../models/coche');

const getCoches = async (req = request, res = response) => {
    const { skip = 0 } = req.query;
    const coches = await Coche.find({}).skip(skip);
    res.json(coches);
}

const getCoche = async (req = request, res = response) => {
    const coche = await Coche.findById(req.params.id);

    res.json(coche);
}

const addCoche = async (req = request, res = response) => {
    const { marca, modelo, year } = req.body;
    
    const coche = new Coche({marca, modelo, year});

    await coche.save();

    res.json(coche);
}

const updateCoche = async (req = request, res = response) => {
    const { marca, modelo, year } = req.body;

    const coche = await Coche.findByIdAndUpdate(req.params.id, {marca, modelo, year});

    res.json(coche);
}

const deleteCoche = async (req = request, res = response) => {
    const coche = await Coche.findByIdAndDelete(req.params.id);

    res.json(coche);
}

module.exports = { getCoches, getCoche, addCoche, updateCoche, deleteCoche }