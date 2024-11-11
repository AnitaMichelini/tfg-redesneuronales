import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegación
import PuzzleGame from './puzzleGame'; // Importamos el componente del rompecabezas
import { useDrag, useDrop } from 'react-dnd'; // Importamos React DnD

const Game = () => {
  const [isGameOver, setIsGameOver] = useState(false);
  const navigate = useNavigate(); // Usamos navigate para ir a otra página, si es necesario

  // Función para manejar la finalización del juego
  const handleGameOver = () => {
    setIsGameOver(true);
  };

  // Función para reiniciar el juego
  const restartGame = () => {
    setIsGameOver(false);
  };

  // Componente de arrastrar y soltar
  const DraggableItem = () => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'ITEM',
      item: { id: 1 },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    return (
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          padding: '10px',
          backgroundColor: 'lightblue',
          border: '1px solid black',
        }}
      >
        Arrastra este item
      </div>
    );
  };

  const DropZone = () => {
    const [, drop] = useDrop(() => ({
      accept: 'ITEM',
      drop: (item) => console.log(item),
    }));

    return (
      <div
        ref={drop}
        style={{
          border: '2px dashed #888',
          padding: '20px',
          marginTop: '20px',
          backgroundColor: '#f9f9f9',
        }}
      >
        Soltar aquí
      </div>
    );
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>¡Bienvenido al Juego de Rompecabezas!</h2>
      
      {/* Mostrar el juego si no ha terminado */}
      {!isGameOver ? (
        <>
          <PuzzleGame onGameOver={handleGameOver} /> {/* Pasamos la función para finalizar el juego */}
          <p>¡Intenta armar el rompecabezas!</p>
          
          {/* Componente de arrastrar y soltar */}
          <DraggableItem />
          <DropZone />
        </>
      ) : (
        <>
          <h3>¡Felicidades, has armado el rompecabezas!</h3>
          <button onClick={restartGame}>Reiniciar Juego</button>
        </>
      )}

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Volver al Tutorial</button>
      </div>
    </div>
  );
};

export default Game;
