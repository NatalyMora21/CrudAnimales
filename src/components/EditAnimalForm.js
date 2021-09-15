
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


const EditAnimalForm = ({ currentAnimal, updateAnimal }) => {

    console.log(currentAnimal)

    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: currentAnimal
    });

    setValue('name', currentAnimal.name)
    setValue('weight', currentAnimal.weight)
    setValue('type', currentAnimal.type)

    const onSubmit = (data, e) => {

        updateAnimal(currentAnimal.id, data)

        //VERRR
        data.id = currentAnimal.id;
        console.log(data);
        e.target.reset();
    }

    return (
        <>
        <h1>Editar</h1>
        <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-sm-6">
                    <label for="firstName"
                        className="form-label">Name</label>
                    <input type="text" placeholder="Enter animal name" className="form-control" name="name" {...register('name', { required: true, maxLength: 20, })} />
                    <div className="py-3" >
            
                    </div>
                </div>
                <div className="col-sm-6"  >
                    <label for="weight" className="form-label">Weight</label>
                    <input type="number" placeholder="Enter animal weight" className="form-control" name="weight" {...register('weight', { required: true })} />
                    <div className="py-3">
                 
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

export default EditAnimalForm;