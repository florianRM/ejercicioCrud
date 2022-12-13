const express = require('express');
const { check } = require('express-validator');
const { getCoches, getCoche, addCoche, updateCoche, deleteCoche } = require('../controllers/coches');
const { existCar } = require('../helpers/db-validators');
const router = express.Router();
const { validateFields } = require('../helpers/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const { isAdminRol, hasRol } = require('../middlewares/validate-rol');

router.get('/', getCoches);

router.get('/:id', getCoche);

router.post('/', addCoche);

router.put('/:id', [
    validateJWT,
    isAdminRol,
    check('id', 'No es un id correcto').isMongoId(),
    check('id').custom(existCar),
    check('marca', 'La marca es obligatoria').not().isEmpty(),
    check('modelo', 'El modelo es obligatorio').not().isEmpty(),
    check('year', 'El año es obligatoriao').not().isEmpty(),
    validateFields
],
updateCoche);

router.delete('/:id', [
    validateJWT,
    hasRol('ADMIN_ROLE','DELETE_ROLE'),
    check('id', 'No es un id correcto').isMongoId(),
    check('id').custom(existCar)
], deleteCoche);

module.exports = router