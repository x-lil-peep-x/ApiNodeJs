var express = require('express');
var router = express.Router();
var artistaController = require('../controller/artistaController');
/* GET users listing. */
router.get('/get', artistaController.get);
router.post('/guardar', artistaController.guardar);
router.delete('/delete/:id', artistaController.eliminar);
router.put('/edit/:id', artistaController.actualizar);
router.get('/:id', artistaController.getById);

module.exports = router;