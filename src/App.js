import logo from './logo.svg';
import neurona from './NEURONA_VS_INFANTIL.webp';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import TutorialNiños from './TutorialNiños';
import Login from './Login'; 
import Register from './Register'; 
import Home from './Home';
import Navbar from './Navbar';
import Game from './game';
import PuzzleGame from './puzzleGame';
import VideosNinos from './videosNiños';  
import TutorialesAdolescentes from './tutorialAdolescentes';
import NeuronGame from './Neuron';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={neurona} className="App-logo" alt="logo" />
            <Navbar />        
            <div className='App-router'> 
              <Routes>
                <Route path="/TutorialNiños" element={<TutorialNiños />} /> {/*Ruta de TutorialNiños */}
                <Route path='/' element= {<Home />} /> {/*Ruta principal */}
                <Route path='/Login' element={<Login />} /> {/*Ruta de login*/}
                <Route path='/Register' element={<Register />} /> {/*Ruta de registro*/}
                <Route path="/Game" element={<Game />} /> {/* Ruta para el juego */}
                <Route path="/PuzzleGame" element={<PuzzleGame />} />
                <Route path='/VideosNiños' element={<VideosNinos />} /> {/*Ruta de login*/}
                <Route path='/TutorialesAdolescentes' element={<TutorialesAdolescentes />} /> {/*Ruta de login*/}
                <Route path='/NeuronGame' element={<NeuronGame />} /> {/*Ruta de login*/}
              </Routes> 
            </div>
        </header>
      </Router>
    </div>
  );
}

export default App;
