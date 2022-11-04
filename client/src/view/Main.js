

import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import { simplePost } from '../services/simplePost';
import { simpleGet } from '../services/simpleGet';
import ProductDetail from '../components/ProductDetail';


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
    return (
        <div>
            <ProductForm title="" price="" description="" onSubmitProp={crearProducto} ></ProductForm>
            <ProductDetail productos={productos}  getProductos={getProductos}/>
        </div>
    );
}

export default Main;
