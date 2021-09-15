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
    { id: null, name: '', weight: '', type: '' }
  );


  const addAnimal = async (animal) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
    };
    const animalUpdate = await Axios.post(`http://localhost:8084/animal/saveAnimal`, animal, {
      headers: headers,
    });

    console.log("Ingreso")

    listAnimals();

    //console.log(animalUpdate);
    //setAnimals([...animals, animal])
  }

  const listAnimals = async () => {

    const animals = await Axios.get("http://localhost:8084/animal/getAnimals");
    setAnimals(animals.data)
    
  }


  const deleteAnimal = async (id) => {
    console.log(id);
    const animaldelete = await Axios.delete(`http://localhost:8084/animal/deleteAnimal/${id}`);
    setAnimals(animals.filter((animal) => animal.id !== id));

  
    console.log(animaldelete);
    //const response = await animaldelete.json();
    //console.log(response)
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
    console.log("info")
    setediting(false)
    const animalUpdate = await Axios.put(`http://localhost:8084/animal/updateAnimal/${id}`,animal);
    console.log(animalUpdate.data)
    listAnimals();

  }



  useEffect(
    async() => {

      const headers = {
        "Access-Control-Allow-Origin": "*",
      };

      console.log('ingreso')
      const animals = await Axios.get("http://localhost:8084/animal/getAnimals",{
        headers: headers,
      });
      setAnimals(animals.data)

      

    }, [],
  );


  return (
    <div className="container mt-5">


      {editing ?
        <EditAnimalForm currentAnimal={currentAnimal} updateAnimal={updateAnimal} /> :
        <FormAnimal addAnimal={addAnimal} />
      }

      <TableAnimal animals={animals} deleteAnimal={deleteAnimal} editRow={editRow} />

    </div>
  );
}

export default App;
