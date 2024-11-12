import React, { useState } from 'react';
import './NeuronGame.css';

const Neuron = ({ id, x, y, connectNeuron }) => {
  return (
    <div
      className="neuron"
      style={{ top: y, left: x }}
      onClick={() => connectNeuron(id)}
    >
      {id}
    </div>
  );
};

export default Neuron;
