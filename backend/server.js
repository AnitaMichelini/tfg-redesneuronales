const express = require('express');
const helmet = require('helmet');
const app = express();
const port = 5000;

// Usamos Helmet para configurar la política de seguridad de contenido (CSP)
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"], // Permite contenido solo desde el mismo origen
      frameSrc: ["'self'", 'https://www.youtube.com'], // Permite iframes de YouTube
    },
  })
);

// Rutas de tu servidor
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
