import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = (props) => {

    const { productos,  getProductos} = props;


    useEffect(() => {
        getProductos()
    }, []);

    return (
        <div>
            <h3>listado de Productos</h3>
            {productos?.map((producto,index)=><Link to={`/${producto._id}`}> <p key={index}>{producto.title}</p></Link>)}
        </div>
    );
}

export default ProductDetail;
