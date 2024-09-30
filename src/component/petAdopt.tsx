import Header from "./generic/Header";
import petHeader from "./petSite/petHeader";
import "../css/AdoptPage.css";
import React, { useState, useRef, useEffect } from 'react';
import { Pet } from '../types/pet';
import '../css/LostPet.css';
import client from '../component/generic/client';

// Lost Pet Component
const PetAdopt = () => {
  const inputAmounts = 5;
  const [errorM, setErrorM] = useState('');
  const [pets, setPets] = useState<Pet[]>([]);
  const [itemsAdded, setItemsAdded] = useState(0);
  const [itemAddedNames, setItemsAddedNames] = useState('');
  const [newPet, setNewPet] = useState<Pet>({
    id: Date.now(),
    name: '',
    lastSighted: '',
    contactNumber: '',
    image: '',
    missingSince: '',
    age: 0,
    about: ''
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchPets = async () => {
    try {
      const resp = await client.client.get('http://192.168.1.246', 3000, 'adoption');
      console.log(resp);
      setPets(JSON.parse(JSON.stringify(resp)) as Pet[]); // Assuming 'resp.data' is the correct structure
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleChange2 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (!itemAddedNames.includes(name)) {
      setItemsAddedNames(prev => prev ? `${prev},${name}` : name);
      setItemsAdded(prev => prev + 1);
    }
    if (value.length === 0 && itemAddedNames.includes(name)) {
      setItemsAddedNames(itemAddedNames.replace(name, '').replace(',,', ','));
      setItemsAdded(prev => prev - 1);
    }
    setNewPet(prevPet => ({ ...prevPet, about: value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (!itemAddedNames.includes(name) && value) {
      setItemsAddedNames(prev => prev ? `${prev},${name}` : name);
      setItemsAdded(prev => prev + 1);
    }

    if (name === 'image' && files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewPet(prevPet => ({ ...prevPet, image: reader.result as string }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setNewPet(prevPet => ({ ...prevPet, [name]: value }));
    }
  };

  const handleAddPet = async () => {
    if (itemsAdded >= inputAmounts) {
      try {
       
        const response:string = await client.client.post('http://192.168.1.246', '3000','adoption', JSON.stringify(newPet));
     
        if(response.length > 0)
        {
          setPets(prevPets => [...prevPets, JSON.parse(response)]);
        }
        resetNewPet();
        setErrorM('');
        window.location.reload();
      } catch (error) {
        setErrorM('Error adding pet');
        console.error(error);
      }
    } else {
      setErrorM('All Fields Must be completed');
    }
  };

  const handleDeletePet = (id: number) => {
    setPets(prevPets => prevPets.filter(pet => pet.id !== id));
  };

  const handleUpdatePet = (id: number) => {
    setPets(prevPets => prevPets.map(pet => pet.id === id ? { ...newPet, id } : pet));
    resetNewPet();
  };

  const resetNewPet = () => {
    setNewPet({
      id: Date.now(),
      name: '',
      lastSighted: '',
      contactNumber: '',
      image: '',
      missingSince: '',
      age: 0,
      about: ''
    });
    setItemsAdded(0);
    setItemsAddedNames('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="App">
      <h1>Adopt Pets</h1>
      {errorM && <p>{errorM}</p>}
      <div className="form-container">
        <input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Pet's name"
          value={newPet.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          autoComplete="off"
          placeholder="Age"
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactNumber"
          autoComplete="off"
          placeholder="Contact Number"
          value={newPet.contactNumber}
          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleChange}
        />
        <textarea
          id="message"
          name="about"
          rows={4}
          cols={50}
          placeholder="About"
          value={newPet.about}
          onChange={handleChange2}
        />
        <button onClick={handleAddPet}>Add Pet</button>
      </div>
      <div className="pets-list">
        {pets.length>0 ? pets.map(pet => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} style={{ width: 300, height: 300, margin: '10px auto' }} />
            <h2>{pet.name}</h2>
            <p>Pet Age: {pet.age}</p>
            <p>Contact Number: {pet.contactNumber}</p>
            <p>About: {pet.about}</p>
          </div>
        )) : <p>No pets available for adoption</p>}
      </div>
    </div>
  );
};

// Lost Page Component
const AdoptPage = () => {
  return (
    <div className="AdoptPageDiv">
      <div className="AdoptPetDiv">
        <PetAdopt />
      </div>
    </div>
  );
};

export default {
  AdoptPage
}
