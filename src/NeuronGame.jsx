import React, { useState } from 'react';
import Neuron from './Neuron';

const NeuronGame = () => {
  const [neurons, setNeurons] = useState([
    { id: 1, x: 100, y: 200 },
    { id: 2, x: 300, y: 200 },
    { id: 3, x: 500, y: 200 },
  ]);

  const [connections, setConnections] = useState([]);
  const [selectedNeuron, setSelectedNeuron] = useState(null);

  const connectNeuron = (id) => {
    if (selectedNeuron === null) {
      setSelectedNeuron(id);
    } else {
      setConnections([...connections, { from: selectedNeuron, to: id }]);
      setSelectedNeuron(null);
    }
  };

  return (
    <div className="game-container">
      <h2>Juego: Conecta las Neuronas</h2>
      <p>Haz clic en una neurona y luego en otra para crear una conexión y visualizar el flujo de información.</p>
      <div className="neurons">
        {neurons.map((neuron) => (
          <Neuron
            key={neuron.id}
            id={neuron.id}
            x={neuron.x}
            y={neuron.y}
            connectNeuron={connectNeuron}
          />
        ))}
        {connections.map((connection, index) => (
          <svg key={index} className="connection-line">
            {/* Aquí se dibuja una línea SVG para cada conexión */}
            <line
              x1={neurons.find((n) => n.id === connection.from).x + 20}
              y1={neurons.find((n) => n.id === connection.from).y + 20}
              x2={neurons.find((n) => n.id === connection.to).x + 20}
              y2={neurons.find((n) => n.id === connection.to).y + 20}
              stroke="blue"
              strokeWidth="2"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default NeuronGame;

