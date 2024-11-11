import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './game.css';

const Game = () => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [puzzlePieces, setPuzzlePieces] = useState([]);
  const [dropZones, setDropZones] = useState([]);
  const navigate = useNavigate();

  // Crear las piezas del rompecabezas
  const generatePuzzlePieces = () => {
    const pieces = [];
    for (let i = 0; i < 9; i++) {
      pieces.push({
        id: i,
        image: `images/piece-${i}.jpg`,
        position: i,
        isCorrect: false,
      });
    }
    setPuzzlePieces(shuffleArray(pieces));
    setDropZones(new Array(9).fill(null));
  };

  // Función para barajar las piezas
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Verificar si el rompecabezas está armado correctamente
  const isPuzzleComplete = () => {
    return puzzlePieces.every((piece, index) => piece.isCorrect);
  };

  // Manejar cuando el rompecabezas se completa
  const handleGameOver = () => {
    if (isPuzzleComplete()) {
      setIsGameOver(true);
    }
  };

  // Reiniciar el juego
  const restartGame = () => {
    setIsGameOver(false);
    generatePuzzlePieces();
  };

  // Manejar el drop de una pieza
  const handleDrop = (pieceIndex, dropZoneIndex) => {
    const newPuzzlePieces = [...puzzlePieces];
    newPuzzlePieces[pieceIndex].isCorrect = dropZoneIndex === pieceIndex;

    setPuzzlePieces(newPuzzlePieces);

    // Actualizar las zonas de drop
    const newDropZones = [...dropZones];
    newDropZones[dropZoneIndex] = newPuzzlePieces[pieceIndex];

    setDropZones(newDropZones);
    handleGameOver();
  };

  // Componente de pieza del rompecabezas
  const DraggableItem = ({ piece, index }) => {
    return (
      <div
        className="draggable-piece"
        style={{ backgroundImage: `url(${piece.image})` }}
        draggable
        onDragEnd={() => {}}
        onDragStart={(e) => e.dataTransfer.setData('pieceIndex', index)}
      />
    );
  };

  // Componente de casillero de drop
  const DropZone = ({ index, piece, handleDrop }) => {
    const handleDragOver = (e) => {
      e.preventDefault();
    };

    const handleDropEvent = (e) => {
      e.preventDefault();
      const pieceIndex = e.dataTransfer.getData('pieceIndex');
      handleDrop(Number(pieceIndex), index);
    };

    return (
      <div
        className={`drop-zone ${piece ? 'has-piece' : ''}`}
        onDragOver={handleDragOver}
        onDrop={handleDropEvent}
      >
        {piece && (
          <img
            src={piece.image}
            alt={`Pieza ${piece.id}`}
            style={{ width: '100px', height: '100px' }}
          />
        )}
      </div>
    );
  };

  // Inicializar el juego al cargar
  React.useEffect(() => {
    generatePuzzlePieces();
  }, []);

  return (
    <div className="game-container">
      <h2>¡Bienvenido al Juego de Rompecabezas!</h2>

      {!isGameOver ? (
        <>
          <div className="game-board">
            <div className="drop-zones">
              {dropZones.map((piece, index) => (
                <DropZone
                  key={index}
                  index={index}
                  piece={piece}
                  handleDrop={handleDrop}
                />
              ))}
            </div>
            <div className="puzzle-pieces">
              {puzzlePieces.map((piece, index) => (
                <DraggableItem key={index} piece={piece} index={index} />
              ))}
            </div>
          </div>
          <p>¡Intenta armar el rompecabezas!</p>
        </>
      ) : (
        <>
          <h3>¡Felicidades, has armado el rompecabezas!</h3>
          <button className="restart-button" onClick={restartGame}>
            Reiniciar Juego
          </button>
        </>
      )}

      <div className="tutorial-button">
        <button onClick={() => navigate('/')}>Volver al Tutorial</button>
      </div>
    </div>
  );
};

export default Game;
