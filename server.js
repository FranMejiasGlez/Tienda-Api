const express = require('express');
const app = express();
app.use(express.json());
// Importar rutas
app.use('/api/productos', require('./routes/productosRoutes.js'));
app.use('/api/clientes', require('./routes/clientesRoutes.js'));
app.use('/api/carritos', require('./routes/carritosRoutes.js'));
app.use('/api/proveedores', require('./routes/proveedoresRoutes.js'));
app.use('/api/pedidos', require('./routes/pedidosRoutes.js'));
app.use('/api/categoria', require('./routes/categoriaRoutes.js'));

//Mejora solicitada, guardar en un log de json todas las llamadas a la API
app.listen(3000, () => console.log('Servidor escuchando en http://localhost:3000'));