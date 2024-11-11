import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegación
import PuzzleGame from 'PuzzleGame'; // Importamos el componente del rompecabezas

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

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>¡Bienvenido al Juego de Rompecabezas!</h2>
      
      {/* Mostrar el juego si no ha terminado */}
      {!isGameOver ? (
        <>
          <PuzzleGame onGameOver={handleGameOver} /> {/* Pasamos la función para finalizar el juego */}
          <p>¡Intenta armar el rompecabezas!</p>
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

export default game;
