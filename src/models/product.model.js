//products. models
import { db } from "../config/db.js";
import { collection, getDocs, doc, getDoc, 
    addDoc, updateDoc, deleteDoc } from "firebase/firestore";

/*
const productos = [
  {
    id: 1,
    nombre: "Auriculares Bluetooth",
    precio: 8999,
    categoria: "Electrónica"
  },
  {
    id: 2,
    nombre: "Camiseta Deportiva",
    precio: 4999,
    categoria: "Ropa"
  },
  {
    id: 3,
    nombre: "Café Molido 500g",
    precio: 2499,
    categoria: "Alimentos"
  },
  {
    id: 4,
    nombre: "Mouse Gamer RGB",
    precio: 6599,
    categoria: "Electrónica"
  },
  {
    id: 5,
    nombre: "Zapatillas Urbanas",
    precio: 13499,
    categoria: "Calzado"
  }
];
*/
// Trae la colección de productos en Firestore
const productosCollection = collection(db, "Productos");
// Exporta las funciones para interactuar con la colección de productos

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

export const createProduct = async (newProduct) => {
  try {
// Agrega un nuevo documento a la colección de productos
    const docRef = await addDoc(productosCollection, newProduct);
    console.log("Producto creado con ID:", docRef.id); // Muestra en consola el producto agregado
    return docRef.id;
  } catch (error) {
// Si ocurre un error lo muestra en la consola
    console.error("Error al agregar el producto:", error);
  }
};

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