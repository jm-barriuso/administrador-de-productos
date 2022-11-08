import React from 'react';
import { simpleDelete } from '../services/simpleDelete';

const DeleteButton = (props) => {

    const {idProduct, successCallback} = props;
    const deleteProduct = async () =>{
        console.log(idProduct)
        await simpleDelete(`http://localhost:8000/api/products/delete/${idProduct}`);
        successCallback();
    }

    return (
        <div>
            <button className='btn btn-danger' onClick={deleteProduct}>ELIMINAR</button>
        </div>
    );
}

export default DeleteButton;

