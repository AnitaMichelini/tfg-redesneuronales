import React, { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import './puzzleGame.css'; // Archivo CSS para mejorar el estilo

// Componente para la pieza arrastrable
const DraggableItem = ({ id, index, puzzlePieces, setPuzzlePieces }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleDrop = () => {
    // Actualizamos el estado de la pieza cuando se suelta
    const newPuzzlePieces = [...puzzlePieces];
    newPuzzlePieces[index] = { id, isCorrect: true }; // Marcar la pieza como colocada correctamente
    setPuzzlePieces(newPuzzlePieces);
  };

  return (
    <div
      ref={drag}
      className={`puzzle-piece ${isDragging ? 'dragging' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <img src={puzzlePieces[id - 1].image} alt={`Pieza ${id}`} />
    </div>
  );
};

// Componente para la zona de colocación de piezas
const DropZone = ({ index, puzzlePieces, setPuzzlePieces }) => {
  const [, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item) => {
      // Actualizamos el estado cuando se suelta una pieza en la zona
      const newPuzzlePieces = [...puzzlePieces];
      if (!newPuzzlePieces[index]) {
        newPuzzlePieces[index] = { id: item.id, isCorrect: false };
        setPuzzlePieces(newPuzzlePieces);
      }
    },
  }));

  return (
    <div ref={drop} className="drop-zone">
      {puzzlePieces[index] && puzzlePieces[index].isCorrect && (
        <div className="puzzle-piece completed-piece">
          <img
            src={puzzlePieces[index].image}
            alt={`Pieza ${puzzlePieces[index].id}`}
          />
        </div>
      )}
    </div>
  );
};

const PuzzleGame = ({ onGameOver }) => {
  const [puzzlePieces, setPuzzlePieces] = useState([]);
  const imageUrl = 'images/piece-2.jpg'; // La ruta de la imagen original

  useEffect(() => {
    // Llamamos a la función para cortar la imagen cuando el componente se monta
    cutImageToPieces(imageUrl);
  }, [imageUrl]);

  const cutImageToPieces = (url) => {
    const img = new Image();
    img.src = url;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const rows = 3;  // Número de filas
      const cols = 3;  // Número de columnas
      const pieceWidth = img.width / cols;
      const pieceHeight = img.height / rows;

      // Crear las piezas
      const pieces = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Definir la región de corte en la imagen
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, col * pieceWidth, row * pieceHeight, pieceWidth, pieceHeight, 0, 0, pieceWidth, pieceHeight);
          // Crear una pieza en base al canvas
          const imageData = canvas.toDataURL('image/jpeg');
          pieces.push({ id: row * cols + col + 1, image: imageData, isCorrect: false });
        }
      }

      setPuzzlePieces(pieces); // Almacenar las piezas recortadas
    };
  };

  // Comprobamos si el rompecabezas está completo
  const isPuzzleComplete = () => {
    return puzzlePieces.every((piece) => piece.isCorrect);
  };

  useEffect(() => {
    if (isPuzzleComplete()) {
      onGameOver(); // Ejecutar la función al terminar el juego
    }
  }, [puzzlePieces, onGameOver]);

  return (
    <div className="game-board">
      {/* Renderizamos las zonas de colocación */}
      {Array.from({ length: 9 }).map((_, index) => (
        <DropZone
          key={index}
          index={index}
          puzzlePieces={puzzlePieces}
          setPuzzlePieces={setPuzzlePieces}
        />
      ))}
      {/* Renderizamos las piezas arrastrables */}
      <div className="draggable-pieces">
        {puzzlePieces.map((piece, index) => (
          <DraggableItem
            key={piece.id}
            id={piece.id}
            index={index}
            puzzlePieces={puzzlePieces}
            setPuzzlePieces={setPuzzlePieces}
          />
        ))}
      </div>
    </div>
  );
};

export default PuzzleGame;
