import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TableUser from './TableUser';

const FormUser = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    //State
    const [entradas, setEntradas] = useState([])
    const [animals, setAnimals] = useState([]);

    const onSubmit = (data, e) => {
        //LLamar a la base de datos para guardadr
        setEntradas([...entradas, data]);
        e.target.reset();
    }

    useEffect(
        () => {

            listAnimals();

        },[],
    );


    const listAnimals = () => {

    }


    const deleteAnimal = (id) => {

    }

    const updateAnimal = (id, updateUser) => {

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
                        <input type="number" placeholder="Enter animal weight" className="form-control" name="weight" {...register('Weight', { required: true })} />
                        <div className="py-3">
                            {errors.name?.type === 'required' && "El campo nombre es requerido"}
                            {errors.name?.type === 'pattern' && "Solo deben ser numeros"}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label for="country" className="form-label">Type</label>
                        <select className="form-select" name="ocupacion" {...register('ocupacion', { required: true, message: "Campo requerido" })}>
                            <option value="Vertebrates">Vertebrates</option>
                            <option value="invertebrates">invertebrates</option>

                        </select>
                        <div className="invalid-feedback">
                            Please select a valid country.
                        </div>
                    </div>
                    <hr className="my-4" />
                    <button className="btn btn-primary">Guardar</button>
                </div>
            </form>
            <TableUser animals={animals} />
        </>
    )
}

export default FormUser;
