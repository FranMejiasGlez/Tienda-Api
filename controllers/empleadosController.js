const empleadosService = require('../services/empleadosService');
exports.obtenerTodos = (req, res) => {
    const empleados = empleadosService.listar();
    res.json(empleados);
};
exports.obtenerPorId = (req, res) => {
    const empleados = empleadosService.buscarPorId(parseInt(req.params.id));
    empleados ? res.json(empleados) : res.status(404).json({ mensaje: 'No encontrado' });
};
exports.crear = (req, res) => {
    const nuevo = empleadosService.crear(req.body);
    res.status(201).json(nuevo);
};
exports.actualizar = (req, res) => {
    const actualizado = empleadosService.actualizar(parseInt(req.params.id), req.body);
    actualizado ? res.json(actualizado) : res.status(404).json({ mensaje: 'No encontrado' });
};
exports.eliminar = (req, res) => {
    const eliminado = empleadosService.eliminar(parseInt(req.params.id));
    eliminado ? res.json(eliminado) : res.status(404).json({ mensaje: 'No encontrado' });
};