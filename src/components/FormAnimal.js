import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const FormAnimal = ({addAnimal}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data, e) => {
        //LLamar a la base de datos para guardadr
        addAnimal(data)
        e.target.reset();
    }

    return (
        <>
            <h1>Animal registration</h1>
            <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-sm-6">
                        <label for="firstName"
                            className="form-label">Name</label>
                        <input type="text" placeholder="Enter animal name" className="form-control" name="name" {...register('name', { required: true, maxLength: 20, })} />
                        <div className="py-3" >
                            {errors.name?.type === 'required' && "The name field is required"}
                            {errors.name?.type === 'pattern' && "The name must not contain special characters"}
                            {errors.name?.type === 'maxLength' && "The name must not be longer than 20 characters"}
                        </div>
                    </div>
                    <div className="col-sm-6"  >
                        <label for="weight" className="form-label">Weight</label>
                        <input type="number" placeholder="Enter animal weight" className="form-control" name="weight" {...register('weight', { required: true })} />
                        <div className="py-3">
                            {errors.name?.type === 'required' && "requires a value greater than zero"}
                            {errors.name?.type === 'pattern' && "Must be numbers"}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label for="country" className="form-label">Type</label>
                        <select className="form-select" name="type" {...register('type', { required: true, message: "Campo requerido" })}>
                            <option value="Vertebrates">Vertebrates</option>
                            <option value="invertebrates">invertebrates</option>
                       </select>
                       
                    </div>
                    < hr className="my-4" />
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
            
        </>
    )
}

export default FormAnimal;
