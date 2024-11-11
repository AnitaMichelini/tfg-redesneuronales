import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 
import { db } from './firebase'; // Importa la instancia de Firebase Firestore
import { setDoc, doc } from 'firebase/firestore'; // Importa funciones de Firestore

const auth = getAuth();

export const registerUser = async (email, password, nombre, apellido, dni, fechaNacimiento, nivel, telefono) => {
  try {
    // Intentar registrar al usuario con correo y contraseña
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Guardar información adicional en Firestore (como nombre, apellido, etc.)
    await setDoc(doc(db, 'usuarios', user.uid), {
      nombre,
      apellido,
      dni,
      fechaNacimiento,
      nivel,
      telefono,
      email
    });

    return user; // Retornar el usuario registrado con la información adicional guardada en Firestore
  } catch (error) {
    // Si ocurre un error, mostrar un mensaje más detallado
    console.error("Error en el registro:", error.code, error.message);
    throw new Error(`Error en el registro: ${error.message} (Código: ${error.code})`); 
  }
};

