import React, { useState } from 'react';
import { registerUser } from './registerUser'; // Asegúrate de que la ruta es correcta

const RegistrarUsuario = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [nivel, setNivel] = useState('básico');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState(''); // Estado para mostrar errores

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    setError(''); // Limpiar cualquier error previo
  
    try {
      // Llamar a la función registerUser de firebase.js
      const user = await registerUser(
        email, 
        password, 
        nombre, 
        apellido, 
        dni, 
        fechaNacimiento, 
        nivel, 
        telefono
      );
      
      console.log("Usuario registrado:", user); // Verifica que el usuario se registre correctamente
  
      alert("¡Registro exitoso!");
  
      // Limpiar el formulario después de guardar
      setEmail('');
      setPassword('');
      setNombre('');
      setApellido('');
      setDni('');
      setFechaNacimiento('');
      setNivel('básico');
      setTelefono('');
  
    } catch (error) {
      // Mostrar el error que fue lanzado desde registerUser.js
      setError(error.message); // Mostrar el mensaje de error al usuario
      console.error("Error al registrar el usuario:", error.message);
    }
  };
  

  return (
    <div>
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <label htmlFor="apellido">Apellido: </label>
        <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />

        <label htmlFor="dni">DNI: </label>
        <input type="text" id="dni" value={dni} onChange={(e) => setDni(e.target.value)} required />

        <label htmlFor="fechaNacimiento">Fecha de Nacimiento: </label>
        <input type="date" id="fechaNacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />

        <label htmlFor="nivel">Nivel: </label>
        <select id="nivel" value={nivel} onChange={(e) => setNivel(e.target.value)} required>
          <option value="básico">Básico</option>
          <option value="avanzado">Avanzado</option>
        </select>

        <label htmlFor="telefono">Teléfono: </label>
        <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />

        <label htmlFor="email">Correo Electrónico: </label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="password">Contraseña: </label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Registrarse</button>
      </form>

      {/* Mostrar errores si existen */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default RegistrarUsuario;
