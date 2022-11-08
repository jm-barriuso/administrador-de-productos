import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { simpleDelete } from '../services/simpleDelete';
import { simpleGet } from '../services/simpleGet';

const Detail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [producto,setProducto] = useState();
    

    useEffect(() => {
        getProducto()
    }, []);



    const getProducto = async() => {
        const response = await simpleGet(`http://localhost:8000/api/products/${id}`);
        console.log(response);
        setProducto(response.data.product)
    }
    const deleteProducto = async() => {
        console.log("VALORES DESDE FORMIK, EN VISTA MAIN",id);
        const response = await simpleDelete(`http://localhost:8000/api/products/delete/${id}`);
        console.log(response)
        navigate('/')
    }

    return (
        <div>
            <button className='btn btn-danger' onClick={()=>deleteProducto()}>ELIMINAR</button>
            <h1>detalle</h1>
            <h2>{producto?.title}</h2>
            <h3>${producto?.price.toLocaleString('de-DE')}</h3>
            <h4>{producto?.description}</h4>
            <button onClick={() =>navigate("/")}>Volver</button>
        </div>
    );
}

export default Detail;
