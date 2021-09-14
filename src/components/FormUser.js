import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TableUser from './TableUser';

const FormUser =()=>{

    const {register, formState: handleSubmi}=useForm();

    //State
    const [entradas, setEntradas]= useState([])
    const [animals, setAnimals]=useState([]);


    const onSubmit =(data, e) =>{

        setEntradas([
            ...entradas,
            data
        ])
        e.target.reset();
    }

    return (
        <>

        

            <TableUser animals={animals}/>
        </>

    )
}

export default  FormUser;