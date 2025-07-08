//products. models
import express from 'express';
import { db } from '../config/db.js';
import { collection, getDocs, doc, getDoc, 
    addDoc, updateDoc, deleteDoc } from 'firebase/firestore';


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

export default productos;