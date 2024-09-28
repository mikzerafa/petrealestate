import React, { useState, useEffect } from 'react';
import petHeader from './component/petSite/petHeader';
import petAdopt from './component/petAdopt';
import petHome from './component/petHome';
import petFood from './component/petFood';
import petGroomer from './component/petGroomer';
import petHygiene from './component/petHygiene';
import petLost from './component/petLost';
import petToys from './component/petRestaurant';
import dogLogo from '../src/logo/doggo2.svg';
import '../src/css/App.css';
import '../src/css/background.css';
import '../src/css/LostPet.css'
import burgerMenu from './component/generic/burgerMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PetSitter from './component/petSitter';
import PetHome from './component/petHome';

const HomeText = "let's find you and your pet a home";
const LostPetText = "let's get your pet back home";
const elipsesMin = ".";
const elipses = "...";
const elipsesStart = "";

function App() {
  const [currentElipses, setCurrentElipses] = useState<string>(".");

  // Function to update the ellipses
  const nextElipses = (elip: string): string => {
    return elip.length >= 3 ? elipsesStart : elip + elipsesMin;
  };

  // useEffect to handle the ellipses update over time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElipses(prevElipses => nextElipses(prevElipses));
    }, 500); // Adjust the timing here (500ms in this case)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Calculate Dog or Cat Years to Human Years


  let currentPage = document.URL;
  const welcomeText = currentPage.includes('Lost') ? LostPetText : HomeText;

  return (
    <div className="App">
      {burgerMenu.BurgerMenu(petHeader.get.petHeader())}
      <header className="App-header">
        <img src={dogLogo} className="App-logo growshrink-image" alt="logo" />
        <p className="glowing-text">
          {welcomeText}{currentElipses}
        </p>

      
        <Router>
          <Routes>
            <Route path='/' element={<PetHome />} />
            <Route path='/Adopt' element={<petAdopt.AdoptPage />} />
            <Route path='/Food' element={<petFood.get.FoodPage/>} />
            <Route path='/Groomer' element={<petGroomer.get.GroomerPage />} />
            <Route path='/Hygiene' element={<petHygiene.get.HygienePage />} />
            <Route path='/Lost' element={<petLost.LostPage />} />
            <Route path='/Sitter' element={<PetSitter.get.SitterPage />} />
            <Route path='/Restaurants' element={<petToys.RestaurantList />} />
          </Routes>
        </Router>
      </header>

    
    </div>
  );
}

export default App;
