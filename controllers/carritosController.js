const carritosService = require('../services/carritosService');
exports.obtenerTodos = (req, res) => {
    const productos = carritosService.listar();
    res.json(productos);
};
exports.obtenerPorId = (req, res) => {
    const producto = carritosService.buscarPorId(parseInt(req.params.id));
    producto ? res.json(producto) : res.status(404).json({ mensaje: 'No encontrado' });
};
exports.crear = (req, res) => {
    const nuevo = carritosService.crear(req.body);
    res.status(201).json(nuevo);
};
exports.actualizar = (req, res) => {
    const actualizado = carritosService.actualizar(parseInt(req.params.id), req.body);
    actualizado ? res.json(actualizado) : res.status(404).json({ mensaje: 'No encontrado' });
};
exports.eliminar = (req, res) => {
    const eliminado = carritosService.eliminar(parseInt(req.params.id));
    eliminado ? res.json(eliminado) : res.status(404).json({ mensaje: 'No encontrado' });
};