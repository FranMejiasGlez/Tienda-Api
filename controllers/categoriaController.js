const categoriaService = require('../services/categoriaService');
exports.obtenerTodos = (req, res) => {
    const categoria = categoriaService.listar();
    res.json(categoria);
};
exports.obtenerPorId = (req, res) => {
    const producto = categoriaService.buscarPorId(parseInt(req.params.id));
    producto ? res.json(producto) : res.status(404).json({ mensaje: 'No encontrado' });
};
exports.crear = (req, res) => {
    const nuevo = categoriaService.crear(req.body);
    res.status(201).json(nuevo);
};
exports.actualizar = (req, res) => {
    const actualizado = categoriaService.actualizar(parseInt(req.params.id), req.body);
    actualizado ? res.json(actualizado) : res.status(404).json({ mensaje: 'No encontrado' });
};
exports.eliminar = (req, res) => {
    const eliminado = categoriaService.eliminar(parseInt(req.params.id));
    eliminado ? res.json(eliminado) : res.status(404).json({ mensaje: 'No encontrado' });
};