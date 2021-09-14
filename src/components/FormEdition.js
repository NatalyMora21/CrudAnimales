
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


const EditUserForm = ({ currentUser, updateUser }) => {

    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: currentUser
    });

    setValue('name', currentUser.name)
    setValue('username', currentUser.username)

    const onSubmit = (data, e) => {

        updateUser(currentUser.id, data)

        //VERRR
        data.id = currentUser.id;
        console.log(data);
        e.target.reset();
    }

    return (
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
                        {errors.name?.type === 'required' && "requires a value greater than zero"}
                        {errors.name?.type === 'pattern' && "Must be numbers"}
                    </div>
                </div>
                <div className="col-sm-6">
                    <label for="country" className="form-label">Type</label>
                    <select className="form-select" name="ocupacion" {...register('ocupacion', { required: true, message: "Campo requerido" })}>
                        <option value="Vertebrates">Vertebrates</option>
                        <option value="invertebrates">invertebrates</option>
                    </select>

                </div>
                < hr className="my-4" />
                <button className="btn btn-primary">Save</button>
            </div>
        </form>
    )
}

export default EditUserForm