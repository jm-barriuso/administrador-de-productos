

import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import { simplePost } from '../services/simplePost';
import { simpleGet } from '../services/simpleGet';
import ProductDetail from '../components/ProductDetail';
import { simpleDelete } from '../services/simpleDelete';


const Main = () => {
    
    const [productos, setProductos] = useState();

    const getProductos = async() => {
        const response = await simpleGet("http://localhost:8000/api/products");
        console.log(response);
        setProductos(response.data.products)
    }
    const crearProducto = async(values) => {
        console.log("VALORES DESDE FORMIK, EN VISTA MAIN",values);
        const response = await simplePost("http://localhost:8000/api/products/new",values);
        console.log(response)
        setProductos([...productos,response.data.product]);
    }

    const deleteProducto = async(idProduct) => {
        /* console.log("VALORES DESDE FORMIK, EN VISTA MAIN",idProduct);
        const response = await simpleDelete(`http://localhost:8000/api/products/delete/${idProduct}`);
        console.log(response) */
        setProductos(productos.filter(producto => producto._id !==idProduct));
    }

    return (
        <div>
            <ProductForm productos={productos} onSubmitProp={crearProducto} ></ProductForm>
            <ProductDetail productos={productos}  getProductos={getProductos} deleteProducto={deleteProducto}/>
        </div>
    );
}

export default Main;
