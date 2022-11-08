import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { simpleGet } from '../services/simpleGet';
import { simplePut } from '../services/simplePut';

const Update = () => {
    
    const {id} = useParams();
    const [producto, setProducto] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getProducto();
    }, []);

    const getProducto = async () =>{
        const response = await simpleGet(`http://localhost:8000/api/products/${id}`);
        console.log(response);
        setProducto(response.data.product)
    }

    const updateProducto = async (values) =>{
        const response = await simplePut(`http://localhost:8000/api/products/update/${id}`,values);
        console.log(response);
        navigate("/")
    }
    


    
    return (
        <div>
            <ProductForm title={producto?.title} price={producto?.price} description={producto?.description} onSubmitProp={updateProducto}/>
        </div>
    );
}

export default Update;
