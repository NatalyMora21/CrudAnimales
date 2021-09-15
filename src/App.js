import './App.css';
import EditAnimalForm from './components/EditAnimalForm';
import FormAnimal from './components/FormAnimal';
import TableAnimal from './components/TableAnimal'
import Axios from 'axios';

import React, { useState, useEffect } from 'react'


function App() {


  //State
  const [animals, setAnimals] = useState([]);
  const [editing, setediting] = useState(false);
  const [currentAnimal, setCurrentAnimal] = useState(
    {id: null,name:'', weight: '', type: ''}
  );


  const addAnimal = (animal) => {
    setAnimals([...animals, animal])
  }



  const listAnimals = async () => {
    const animals = await Axios.get("http://localhost:4001/");
    const response = await animals.json();
    setAnimals(response)
  }


  const deleteAnimal = async (id) => {
    const animaldelete = await Axios.delete(`http://localhost:4001/${id}`);
    const response = await animaldelete.json();
  }

  const editRow = async (animal) => {
    setediting(true)
    setCurrentAnimal({
      id: animal.id,
      name: animal.name,
      weight: animal.weight,
      type: animal.type
    })
  }

  const updateAnimal = async (id, animal) => {
    setediting(false)
    const animalUpdate = await Axios.delete(`http://localhost:4001/${id}`, animal);
    const responseinfo = await animalUpdate.json();
  }



  useEffect(
    () => {

        listAnimals();

    },[],
);


  return (
    <div className="container mt-5">
      

      {editing ?
        <EditAnimalForm currentAnimal={currentAnimal}  updateAnimal={updateAnimal}/> :
        <FormAnimal addAnimal={addAnimal}  />
      }

    <TableAnimal animals={animals} deleteAnimal={deleteAnimal} e={editRow}/>

    </div>
  );
}

export default App;
