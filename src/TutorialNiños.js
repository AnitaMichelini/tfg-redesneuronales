import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Usa useNavigate en lugar de useHistory

const TutorialNiños = () => {
  const [step, setStep] = useState(1); // Paso actual del tutorial
  const navigate = useNavigate(); // Usamos useNavigate para la navegación

  // Función para avanzar al siguiente paso
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  // Función para retroceder al paso anterior
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>¡Bienvenidos al tutorial sobre redes neuronales!</h1>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Vamos a aprender cómo funcionan las neuronas de una manera divertida.
      </p>
      
      {/* Instrucciones dinámicas según el paso */}
      {step === 1 && (
        <div>
          <h2>¿Qué es una neurona?</h2>
          <p>Imagina que tu cerebro es como una gran ciudad llena de pequeños mensajeros. Estos mensajeros son las neuronas. Cada neurona tiene un trabajo muy importante: ¡llevar información de un lugar a otro!</p>
          <img src="neurona_tutorial1.jpg" alt="Neurona simple"  style={{ maxWidth: '80%', height: 'auto', marginBottom: '20px' }}  />
          <p>Las neuronas se conectan entre sí, como si fueran cables de una computadora, y juntas trabajan para ayudarte a pensar, moverte y aprender cosas nuevas.</p>
          <p>Cuando aprendes algo nuevo, las neuronas se envían mensajes entre ellas para recordarlo. ¡Es como si tu cerebro estuviera haciendo un gran equipo de trabajo!</p>
        </div>
      )}


      {step === 2 && (
        <div>
          <h2>¿Cómo se conectan las neuronas?</h2>
          <p>Las neuronas se conectan a través de lo que llamamos sinapsis.</p>
          <p>Imagina que tu cerebro es como una ciudad muy grande, y las neuronas son como mensajeros muy rápidos que van de un lugar a otro llevando información. Cada neurona es una pequeña célula, pero muy importante, que ayuda a tu cuerpo a hacer cosas como mover tus manos, pensar, o incluso sentir cuando tienes frío o calor.</p>
          <img src="neurona_tutorial2.jpg" alt="Conexión entre neuronas"  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}   />
          <p>Las neuronas tienen algo como cables, que se llaman axones y dendritas. Estos cables ayudan a las neuronas a hablar entre sí. ¡Es como si las neuronas pudieran enviarse mensajes secretos para que todo en tu cuerpo funcione correctamente!</p>
          <p>Entonces, cuando te piden que muevas un dedo, las neuronas envían un mensaje de tu cerebro a ese dedo para que se mueva. ¡Las neuronas son como los superhéroes de tu cuerpo!</p>
          <p>¡Vamos a ver cómo funcionan estas conexiones!</p>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>¿Cómo aprenden las redes neuronales?</h2>
          <p>Imagina que las redes neuronales son como una gran clase de estudiantes (las neuronas) que quieren aprender algo nuevo. Al principio, estos estudiantes no saben mucho, pero cuanto más practican, mejor se vuelven.</p>
          
          <p>Las redes neuronales aprenden haciendo muchos intentos. Por ejemplo, si les das una imagen de un perro y les dices que es un perro, las neuronas hacen su trabajo y, poco a poco, empiezan a entender qué hace a un perro ser un perro. Cada vez que practican, las neuronas se vuelven más inteligentes y mejoran su respuesta.</p>
          
          <p>Es como cuando tú estás aprendiendo a jugar un juego. Al principio no sabes muy bien cómo hacerlo, pero si sigues practicando, poco a poco te vuelves mucho mejor. Las redes neuronales hacen lo mismo, ¡y por eso pueden aprender a hacer cosas increíbles!</p>
          
          {/* Imagen con estilo ajustado */}
          <img 
            src="neurona_tutorial3.jpg" 
            alt="Red neuronal aprendiendo" 
            style={{ maxWidth: '80%', height: 'auto', marginBottom: '20px' }} 
          />
          
          <p>Vamos a intentar un juego para ver cómo funciona.</p>
          <button onClick={() => navigate('/game')}>Jugar y aprender</button> {/* Usamos navigate en lugar de history.push */}
        </div>
      )}

      {/* Botones de navegación */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={prevStep} disabled={step === 1} style={{ marginRight: '10px' }}>
          Anterior
        </button>
        <button onClick={nextStep} disabled={step === 3}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default TutorialNiños;
