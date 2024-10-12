const express = require('express');
const app= express();
const port= 5000;

app.get('/', (req, res) => {
   res.send('Servidor funcionando correctamete!');
});

app.listen(port, () => {
   console.log('Servidor corriendo en el puerto ${port}');
});
