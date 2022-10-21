// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, addDoc, getFirestore, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-34755-2022-fecd4.firebaseapp.com",
  projectId: "react-34755-2022-fecd4",
  storageBucket: "react-34755-2022-fecd4.appspot.com",
  messagingSenderId: "1039049012704",
  appId: "1:1039049012704:web:064ff8d1520c3c85c2a785"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const  cargarBaseDeDatos = async () => {
    const promise = await fetch ('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async(producto) => {
        await addDoc(collection(db,"productos"), {
            nombre: producto.nombre,
            categoria: producto.categoria,
            tipo: producto.tipo,
            precio: producto.precio,
            stock: producto.stock,
            detalle: producto.detalle,
            tags: producto.tags,
            imagen: producto.imagen
        })
    })
}

const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    return productos
}

const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    return producto
}

const updateProducto = async (id, info) => {
const estado = await updateDoc(doc(db, "productos", id), info)
return estado 
}

const deleteProducto = async (id) => {
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
}

const createProducto = async (producto) => {
    const estado = await addDoc(collection(db, "productos"),{
        nombre: producto.nombre,
        categoria: producto.categoria,
        tipo: producto.tipo,
        precio: producto.precio,
        stock: producto.stock,
        detalle: producto.detalle,
        tags: producto.tags,
        imagen: producto.imagen
    })
    return estado
}

const crearOrdenCompra = async (nombre, apellido, dni, telefono, email, direccion, dia, hora, productos, total) => {
const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
    nombre: nombre, 
    apellido: apellido,
    dni: dni,
    telefono: telefono,
    email: email,
    direccion: direccion,
    dia: dia,
    hora: hora,
    productos: productos,
    precioTotal: total
})
return ordenCompra
}

const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    return ordenCompra
}

export{cargarBaseDeDatos, getProductos, getProducto, updateProducto, createProducto, deleteProducto, crearOrdenCompra, getOrdenCompra}