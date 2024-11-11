import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes'; // Definimos los tipos de elementos arrastrables

// Definir las piezas y sus posiciones
const PuzzlePiece = ({ piece, index, movePiece }) => {
  const [, drag] = useDrag({
    type: ItemTypes.PIECE,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.PIECE,
    hover: (item) => {
      if (item.index !== index) {
        movePiece(item.index, index);
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        width: '100px',
        height: '100px',
        backgroundImage: `url(${piece.image})`,
        backgroundPosition: `-${piece.x * 100}px -${piece.y * 100}px`,
        backgroundSize: '300px 300px', // Para un rompecabezas 3x3
        border: '1px solid #000',
        display: 'inline-block',
        margin: '5px',
        cursor: 'move',
      }}
    ></div>
  );
};

// Componente principal del juego
const PuzzleGame = ({ onGameOver }) => {
  const [pieces, setPieces] = useState(createPieces());

  const movePiece = (fromIndex, toIndex) => {
    const newPieces = [...pieces];
    [newPieces[fromIndex], newPieces[toIndex]] = [newPieces[toIndex], newPieces[fromIndex]];
    setPieces(newPieces);

    // Verificamos si las piezas están en el orden correcto (rompecabezas resuelto)
    if (newPieces.every((piece, index) => piece.id === index)) {
      onGameOver();  // Llamamos a onGameOver cuando el rompecabezas está resuelto
    }
  };

  return (
    <div>
      <h2>¡Arma el rompecabezas!</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '320px' }}>
        {pieces.map((piece, index) => (
          <PuzzlePiece key={index} piece={piece} index={index} movePiece={movePiece} />
        ))}
      </div>
    </div>
  );
};

// Crear las piezas del rompecabezas
const createPieces = () => {
  const image = 'path_to_your_image.jpg'; // Ruta de la imagen que quieres usar
  const pieces = [];
  let id = 0;
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      pieces.push({ id, x, y, image });
      id++;
    }
  }
  return pieces;
};

export default PuzzleGame;
