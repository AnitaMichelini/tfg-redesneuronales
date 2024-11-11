import React from "react";
import './Login.css'; 

const Login = () => {
    return (
        <div className="login-container">
            <h1>Bienvenido a Aprender Redes Neuronales</h1>
                <p>¡Ingresa para comenzar tu aventura en el aprendizaje de redes neuronales!</p>
                <img src="imgLogin.jpg" alt="Neurona"/>
                <form>
                    <label htmlFor="email">Correo Electrónico: </label>
                    <input type="email" id="email" required/>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" required />
                    <button type="submit">Iniciar Sesion</button>
                </form>
                <a href="/recover-password">Recuperar Contraseña</a>
                <a href="register">registrarse</a>

        </div>
    );
};

export default Login;