import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductDetail = (props) => {

    const { productos,  getProductos, deleteProducto} = props;
    const navigate = useNavigate();

    useEffect(() => {
        getProductos()
    }, []);


    return (
        <div>
            <h3>listado de Productos</h3>
            {productos?.map((producto,index)=>
            <>
                <Link to={`/${producto._id}`}> <p key={index}>{producto.title}</p></Link>
                <button key={index+1} className='btn btn-warning' onClick={()=>navigate(`/update/${producto._id}`)}>UPDATE</button>
                <DeleteButton key={index+2} idProduct={producto._id} successCallback={()=>deleteProducto(producto._id)}/>
               {/*  <button className='btn btn-danger' onClick={()=>deleteProducto(producto._id)}>ELIMINAR</button> */}
            </>
            )}
        </div>
    );
}

export default ProductDetail;
