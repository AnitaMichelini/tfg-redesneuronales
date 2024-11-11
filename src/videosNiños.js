import React from 'react';
import './videosNiños.css'; // Aquí podemos colocar nuestros estilos personalizados

const videos = [
  {
    id: 1,
    title: '¿Cómo funciona exactamente tu cerebro? | Ciencias para niños',
    description: 'Un video que explica como funciona el cerebro y las partes que lo componen.',
    videoUrl: 'https://www.youtube.com/embed/Hk7fws1B1rw', // URL embebida
  },
  {
    id: 2,
    title: '¿Qué es una neurona? ¿Cómo funciona?',
    description: 'Un video sobre qué son las neuronas y las partes de ellas.',
    videoUrl: 'https://www.youtube.com/embed/rmEYGWt5ego', // URL embebida
  },
  {
    id: 3,
    title: 'Las Neuronas - Estructura y función [Video educativo para niños]',
    description: 'Datos curiosos, diferentes tipos de neuronas y la sinapsis.',
    videoUrl: 'https://www.youtube.com/embed/MW90uT1HYS4', // URL embebida
  },
];

const VideoItem = ({ title, description, videoUrl }) => (
  <div className="video-item">
    <h3>{title}</h3>
    <p>{description}</p>
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

const VideosNinos = () => {
  return (
    <div className="videos-container">
      <h2>Videos Educativos sobre Redes Neuronales para Niños</h2>
      <div className="video-list">
        {videos.map((video) => (
          <VideoItem
            key={video.id}
            title={video.title}
            description={video.description}
            videoUrl={video.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default VideosNinos;
