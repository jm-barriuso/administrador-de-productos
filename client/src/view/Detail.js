import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';

const Detail = () => {

    const { id } = useParams();

    useEffect(() => {
        getProducto()
    }, []);

    const [producto,setProducto] = useState();
    const getProducto = async() => {
        const response = await simpleGet(`http://localhost:8000/api/products/${id}`);
        console.log(response);
        setProducto(response.data.product)
    }

    const navigate = useNavigate();
    return (
        <div>
            <h1>detalle</h1>
            <h2>{producto?.title}</h2>
            <h3>${producto?.price}</h3>
            <h4>{producto?.description}</h4>
            <button onClick={() =>navigate("/")}>Volver</button>
        </div>
    );
}

export default Detail;
