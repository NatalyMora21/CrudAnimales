import React, { useState } from 'react'


const TableAnimal = ({ animals,deleteAnimal, editRow}) => {

    return (
        <>
            <h1 className="py-6">List of animals</h1>
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
                                <button className="btn btn-danger"  onClick={()=> {editRow(animal)}}>Edit</button>
                                <button className="btn btn-warning" onClick={()=> {deleteAnimal(animal.id)}}>Delete</button>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )

}


export default TableAnimal;