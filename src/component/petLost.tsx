import React, { useState, useRef } from 'react';
import { Pet } from '../types/pet';
import '../css/LostPet.css';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    console.log('name: ' + name);
    if(itemAddedNames.length == 0)
    {
      setItemsAddedNames(name)
      setItemsAdded(itemsAdded + 1);
    }
    else if(!itemAddedNames.includes(name) && value.length > 0)
    {
      setItemsAddedNames(itemAddedNames + "," + name)
      setItemsAdded(itemsAdded + 1)
    }
    else if(itemAddedNames.includes(name) && value.length == 0)
    {
      setItemsAddedNames(itemAddedNames.substring(0, itemAddedNames.indexOf(name)) + itemAddedNames.substring(itemAddedNames.indexOf(name) + name.length+1, itemAddedNames.length));
      setItemsAdded(itemsAdded-1)
    }

    if (name === 'image' && files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewPet((prevPet) => ({
          ...prevPet,
          image: reader.result as string,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setNewPet((prevPet) => ({
        ...prevPet,
        [name]: value,
      }));
    }
  };

  const handleAddPet = () => {
    
    console.log('itemsAdded ' + itemsAdded + ' out of ' + inputAmounts);
    console.log(itemAddedNames);
    if(itemsAdded == inputAmounts)
    {
      setPets((prevPets) => [...prevPets, newPet]);
      resetNewPet();
      setItemsAdded(0);
      setItemsAddedNames('')

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
    else{
      //add error signal on inputs not added
      setErrorM('All Fields Must be completed');
    }
    
  };

  const handleDeletePet = (id: number) => {
    setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
  };

  const handleUpdatePet = (id: number) => {
    const updatedPets = pets.map((pet) =>
      pet.id === id ? { ...newPet, id } : pet
    );
    setPets(updatedPets);
    resetNewPet();
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
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
  };

 

  return (
    <div className="App">
      <h1>Lost Pets</h1>
      <p>{errorM}</p>
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
      <div className="pets-list" style={{}}>
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card" style={{width: 300, height: 300, margin: '10px auto'}}>
            <img src={pet.image} alt={pet.name} />
            <h2>{pet.name}</h2>
            <p>Last Sighted: {pet.lastSighted}</p>
            <p>Contact Number: {pet.contactNumber}</p>
            <p>Missing Since: {pet.missingSince}</p>
          </div>
        ))}
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

export default{ LostPage, PetLost };
