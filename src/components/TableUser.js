import React, { useState } from 'react'


const TableUser = ({ animals,deleteAnimal, updateAnimal}) => {

    return (
        <>
            <h1>List of animals</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">weight</th>
                        <th scope="col">type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        animals.map(animal => (
                            <tr>
                                <th scope="row">1</th>
                                <td>{animal.name}</td>
                                <td>{animal.weight}</td>
                                <td>{animal.type}</td>
                                <button className="button muted-button" onClick={()=> {updateAnimal(animal)}}>Edit</button>
                                <button className="button muted-button" onClick={()=> {deleteAnimal(animal.id)}}>Delete</button>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )

}


export default TableUser;