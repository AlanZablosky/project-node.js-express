//products. models
import { db } from "../config/db.js";
import { collection, getDocs, doc, getDoc, 
    addDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Trae la colección de productos en Firestore
const productosCollection = collection(db, "Productos");

// Funciones para interactuar con la colección de productos
export const getAllProducts = async() => {
  try {
// Obtiene todos los documentos de la colección
    const snapshot = await getDocs(productosCollection);
// Mapea los documentos a un array de objetos con su datos
    return snapshot.docs.map((doc) => ({ id : doc.id, ...doc.data() }));
  } catch (error) { 
// Captura cualquier error y lo muestra en la consola
    console.error(error);
  }
};

// Función para obtener un producto por ID
export const getProductById = async (id) => {
  try {
// Obtiene la referencia del documento por ID
    const productRef = doc(productosCollection, id); 
    const snapshot = await getDoc(productRef);
// Si existe el documento, devuelve el producto con su ID
    return snapshot.exists() ? { id : snapshot.id, ...snapshot.data() } : null; //sino , null
  } catch (error) { 
// Si ocurre un error, lo captura y lo muestra en la consola
    console.error(`Error al obtener el product con Id ${id}:`, error);
  }
};

// Función para crear un nuevo producto
export const createProduct = async (newProduct) => {
  try {
// Agrega un nuevo documento a la colección de productos
    const docRef = await addDoc(productosCollection, newProduct);
    console.log("Producto creado con ID:", docRef.id); // Muestra en consola el producto agregado
    return {id:docRef.id, ...newProduct}; // Devuelve el producto creado con su ID
  } catch (error) {
// Si ocurre un error lo muestra en la consola
    console.error("Error al agregar el producto:", error);
  }
};

// Función para eliminar un producto por ID
export const deleteProduct = async (id) => {
  try { 
// Obtiene la referencia del documento por ID
    const productRef = doc(productosCollection, id); // Verifica si el producto existe 
// Elimina el documento de la colección
    await deleteDoc(productRef);
    console.log(`Producto con ID ${id} eliminado`);
  } catch (error) {
    console.error(`Error al eliminar el producto con ID ${id}:`, error);
  }
};

// Función para actualizar un producto por ID
export const updateProduct = async (id, updatedProduct) => {
  try {
// Obtiene la referencia del documento por ID
    const productRef = doc(productosCollection, id);
// Actualiza el documento con los nuevos datos
    await updateDoc(productRef, updatedProduct);  
    console.log(`Producto con ID ${id} actualizado`);
    
  } catch (error) {
    console.error(`Error al actualizar el producto con ID ${id}:`, error);
  }
};