import React, { useState, useRef, useEffect } from 'react';
import { Pet } from '../types/pet';
import '../css/LostPet.css';
import client from './generic/client';

// Lost Pet Component
const PetLost = () => {
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
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch pets when the component loads
  const fetchPets = async () => {
    try {
      const resp = await client.client.get('http://192.168.1.246',3000,'lost');
      console.log(resp);
      setPets(resp); // Assuming 'resp.data' contains the array of pets
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  useEffect(() => {
    console.log('Loading pets');
    fetchPets();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (value.length > 0 && !itemAddedNames.includes(name)) {
      setItemsAddedNames(prev => prev ? `${prev},${name}` : name);
      setItemsAdded(prev => prev + 1);
    } else if (value.length === 0 && itemAddedNames.includes(name)) {
      setItemsAddedNames(prev => prev.replace(new RegExp(`,?${name}`), ''));
      setItemsAdded(prev => prev - 1);
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
        const response = await client.client.post('http://192.168.1.246', '3000', 'lost', JSON.stringify(newPet));
        if (response && response.data) {
          setPets(response.data);
        }
        resetNewPet();
        setErrorM('');
        window.location.reload();
      } catch (error) {
        setErrorM('Error adding pet');
        console.error('Error adding pet:', error);
      }
    } else {
      setErrorM('All Fields Must be completed');
    }
  };

  const handleDeletePet = (id: number) => {
    setPets(prevPets => prevPets.filter(pet => pet.id !== id));
  };

  const resetNewPet = () => {
    setNewPet({
      id: Date.now(),
      name: '',
      lastSighted: '',
      contactNumber: '',
      image: '',
      missingSince: '',
    });
    setItemsAdded(0);
    setItemsAddedNames('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="App">
      <h1>Lost Pets</h1>
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
          name="lastSighted"
          autoComplete="off"
          placeholder="Location Last Sighted"
          value={newPet.lastSighted}
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
        <input
          type="text"
          name="missingSince"
          autoComplete="off"
          placeholder="Missing Since"
          value={newPet.missingSince}
          onChange={handleChange}
        />
        <button onClick={handleAddPet}>Add Pet</button>
      </div>
      <div className="pets-list">
        {(pets && pets.length > 0) ? (
          pets.map(pet => (
            <div key={pet.id} className="pet-card">
              <img src={pet.image} alt={pet.name} style={{ width: 300, height: 300, margin: '10px auto' }} />
              <h2>{pet.name}</h2>
              <p>Last Sighted: {pet.lastSighted}</p>
              <p>Contact Number: {pet.contactNumber}</p>
              <p>Missing Since: {pet.missingSince}</p>
            </div>
          ))
        ) : (
          <p>No Pets Currently Listed</p>
        )}
      </div>
    </div>
  );
};

// Lost Page Component
const LostPage = () => {
  return (
    <div className='LostPageDiv'>
      <div className='LostPetDiv'>
        <PetLost />
      </div>
    </div>
  );
};

export default { LostPage, PetLost };
