import { Field, Formik, Form} from 'formik';
import React from 'react';
import * as Yup from "yup";

const ProductForm = (props) => {
    
    const { title,price,description, onSubmitProp } = props;

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{
                    title: title,
                    price: price,
                    description: description
                }}

                validationSchema={Yup.object().shape({
                    title: Yup.string()
                    .min(4,"El nombre es muy corto")
                    .max(15, "El nombre es muy corto")
                    .required("Por favor ingrese el nombre de un producto"),
                    price: Yup.number()
                    .required("Por favor ingrese un precio"),
                    description: Yup.string()
                    .required("Por favor ingrese una descripcion")
                })}

                onSubmit={(values,{setSubmitting})=>{
                console.log("info del formik",values);
                onSubmitProp(values);
            }}
        >

            {({errors,touched,handleSubmit}) =>{
                return(<div>
                    <h2>Product Manager</h2>
                    <Form>
                        <label htmlFor="title">Producto</label>
                        <Field id="title" type="text" placeholder="nombre de producto" name="title" className="form-control"/>
                        {errors.title && touched.title && <p>{errors.title}</p>}

                        <label htmlFor="price">precio</label>
                        <Field id="price" type="number" placeholder="nombre de producto" name="price" className="form-control"/>
                        {errors.price && touched.price && <p>{errors.price}</p>}

                        <label htmlFor="description">descripcion</label>
                        <Field id="description" type="text" placeholder="nombre de producto" name="description" className="form-control"/>
                        {errors.description && touched.description && <p>{errors.description}</p>}

                        <button type="submit" disabled={Object.values(errors).length>0 || Object.values(touched).length===0} >ENVIAR</button>
                    </Form>
                </div>)
            }}
            
            
        </Formik>
        </div>
    );
}

export default ProductForm;

