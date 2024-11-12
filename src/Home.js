import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la Página Principal</h1>
      <p>¡Si estas interesado en Redes Neuronales este es tu lugar!</p>

      {/* Sección de Tutoriales y Videos para Niños */}
      <section>
        <h2>Tutoriales y Videos para Niños</h2>
        <p>Estos son algunos tutoriales y videos que ayudan a los niños a aprender sobre redes neuronales.</p>
        <ul>
          <li>
            <a href="/TutorialNiños" target="_blank" rel="noopener noreferrer">
              Tutoriales para Niños
            </a>
          </li>
          <li>
            <a href="/videosNiños" target="_blank" rel="noopener noreferrer">
              Videos para Niños
            </a>
          </li>
        </ul>
      </section>

      {/* Sección de Juego de Rompecabezas */}
      <section>
        <h2>Juego de Rompecabezas sobre Redes Neuronales</h2>
        <p>Juega y aprende sobre cómo funcionan las redes neuronales a través de un rompecabezas interactivo.</p>
        <a href="/game" target="_blank" rel="noopener noreferrer">Acceder al Juego</a>
        <h2>Juego de Conexion Neuronal</h2>
        <p>Juega y aprende sobre cómo funcionan las conexiones de redes neuronales.</p>
        <a href="/Neuron" target="_blank" rel="noopener noreferrer">Acceder al Juego</a>
      </section>

      {/* Sección de Tutoriales para Adolescentes */}
      <section>
        <h2>Tutoriales para Adolescentes sobre Redes Neuronales</h2>
        <p>Si eres adolescente y deseas aprender más, estos tutoriales son para ti.</p>
        <ul>
          <li>
            <a href="/tutorialesAdolescentes" target="_blank" rel="noopener noreferrer">
              Tutoriales para Adolescentes
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
