import { useState } from "react";
import '../css/LostPet.css';

const PetHome = () => {
  const [calculatedAge, setCalculatedAge] = useState<number | null>(null);
  const [animalType, setAnimalType] = useState<string>('dog'); // Dog by default
  const [age, setAge] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  // Calculate Human Years based on Dog or Cat selection
  const calculateHumanYears = () => {
    // Human age tables based on weight category
    const smallDogYears = [15, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80];
    const mediumDogYears = [15, 24, 28, 32, 36, 42, 47, 51, 56, 60, 65, 69, 74, 78, 83, 87];
    const largeDogYears = [15, 24, 28, 32, 36, 45, 50, 55, 61, 66, 72, 77, 82, 88, 93, 120];

    const catToHumanYears = [7, 13, 20, 26, 33, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100];

    let humanYears = 0;

    // Handle Cat age calculation
    if (animalType === "cat") {
      console.log('Cat age being calculated');
      if (age > 0 && age <= catToHumanYears.length) {
        humanYears = catToHumanYears[age - 1];
      } else {
        return null; // Invalid age for the cat
      }
    } 
    // Handle Dog age calculation
    else {
      // Classify the dog based on weight
      if (weight <= 10) {
        humanYears = smallDogYears[age - 1] || -1;
      } else if (weight >= 11 && weight <= 25) {
        humanYears = mediumDogYears[age - 1] || -1;
      } else if (weight > 25) {
        humanYears = largeDogYears[age - 1] || -1;
      } else {
        return -1; // Invalid weight for the dog
      }
    }

    return humanYears;
  };

  // Handle the "Calculate" button click
  const handleCalculate = () => {
    const humanAge = calculateHumanYears();
    setCalculatedAge(humanAge);
  };

  // Handle the change of animal type (dog or cat)
  const handleAnimalTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnimalType(e.target.value);
    setCalculatedAge(null); // Reset the calculated age when switching
  };

  return (
    <div className='petHomePageDiv'>
      <div className='form-container'>
        <h1>Animal Age to Human Age Calculator</h1>

        <div>
          <label>
            <input
              type="radio"
              value="dog"
              checked={animalType === 'dog'}
              onChange={handleAnimalTypeChange}
            />
            Dog
          </label>
          <label>
            <input
              type="radio"
              value="cat"
              checked={animalType === 'cat'}
              onChange={handleAnimalTypeChange}
            />
            Cat
          </label>
        </div>

        <input
          type="number"
          placeholder='Age in Years'
          value={age || ''}
          onChange={e => setAge(Number(e.target.value))}
        />

        {animalType === 'dog' && (
          <input
            type="number"
            placeholder='Weight in Kg'
            value={weight || ''}
            onChange={e => setWeight(Number(e.target.value))}
          />
        )}

        <button onClick={handleCalculate}>Calculate</button>

        {calculatedAge !== null && (
          <p>{`The ${animalType} is approximately ${calculatedAge} human years old.`}</p>
        )}
      </div>
    </div>
  );
};

export default PetHome;
