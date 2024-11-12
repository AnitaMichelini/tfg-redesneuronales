import React from 'react';
import './tutorialesAdolescentes.css'; // Estilos personalizados para los tutoriales

const tutorialesAdolescentes = [
  {
    id: 1,
    title: 'Introducción a las Redes Neuronales',
    description: 'Un tutorial que explica qué son las redes neuronales, cómo funcionan y por qué son importantes en el aprendizaje automático.',
    content: `
      1. ¿Qué es una Red Neuronal?
         Las redes neuronales son sistemas informáticos inspirados en el cerebro humano, diseñados para aprender de los datos.
      2. Estructura de una Red Neuronal
         Las redes están formadas por neuronas artificiales organizadas en capas: entrada, ocultas y salida.
      3. ¿Cómo se usan las Redes Neuronales?
         Se usan en aplicaciones como el reconocimiento de voz, imágenes, y hasta en videojuegos.
      `,
    videoUrl: 'https://www.youtube.com/watch?v=jKCQsndqEGQ&t=1110s', // Enlace a un video relacionado
  },
  {
    id: 2,
    title: '¿Cómo una Red Neuronal Aprende?',
    description: 'Este tutorial cubre cómo las redes neuronales aprenden a partir de datos y el proceso de entrenamiento.',
    content: `
      1. Entrenamiento de una Red Neuronal
         Una red neuronal aprende observando ejemplos, comparando sus predicciones con las respuestas correctas.
      2. ¿Qué es el Error?
         Durante el entrenamiento, las redes tratan de minimizar el error o diferencia entre la predicción y la realidad.
      3. Ajustando los Pesos
         El algoritmo de retropropagación ajusta los pesos de las conexiones para que la red mejore sus predicciones.
      `,
    videoUrl: 'https://www.youtube.com/watch?v=mwHiaTrQOiI', // Enlace a un video relacionado
  },
  {
    id: 3,
    title: 'Creando tu Propia Red Neuronal Simple',
    description: 'Aprende a crear una red neuronal simple con un conjunto de datos para clasificar imágenes o información.',
    content: `
      1. Seleccionando un Conjunto de Datos
         Escoge un conjunto de datos para enseñar a tu red neuronal, por ejemplo, imágenes de gatos y perros.
      2. Configurando la Red Neuronal
         Define el número de capas, neuronas y la función de activación para que la red aprenda correctamente.
      3. Entrenando y Evaluando tu Red
         Después de entrenar, prueba tu red con nuevos datos para ver cómo clasifica imágenes o información.
      `,
    videoUrl: 'https://www.youtube.com/embed/MW90uT1HYS4', // Enlace a un video relacionado
  },
];

const TutorialItem = ({ title, description, content, videoUrl }) => (
  <div className="tutorial-item">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="tutorial-content">
      <p>{content}</p>
    </div>
    <iframe
      width="100%"
      height="315"
      src={videoUrl}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

const TutorialesAdolescentes = () => {
  return (
    <div className="tutoriales-container">
      <h2>Tutoriales y Videos para los más Avanzados</h2>
      <p>Estos tutoriales están diseñados para adolescentes que ya tienen una comprensión básica de las redes neuronales y desean explorar conceptos más complejos.</p>
      <div className="tutorial-list">
        {tutorialesAdolescentes.map((tutorial) => (
          <TutorialItem
            key={tutorial.id}
            title={tutorial.title}
            description={tutorial.description}
            content={tutorial.content}
            videoUrl={tutorial.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default TutorialesAdolescentes;
