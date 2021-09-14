import React, {useState} from 'react'


const TableUser= ({animals}) => {


    return (
        <>
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
                    
                        animals.map( animal => (
                            <tr>
                                <th scope="row">1</th>
                                <td>{animal.name}</td>
                                <td>{animal.weight}</td>
                                <td>{animal.type}</td>
                                <td><button type="button" class="btn btn-warning">Update</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                        ) 
                        )
                    
                    }

                </tbody>
            </table>
        </>
    )



}


export default TableUser;