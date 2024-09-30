import React, { useEffect } from 'react';
import maltaOutline from '../logo/maltaOutline.png';
import '../css/BeachPage.css';

interface DotPosition {
  x: number;
  y: number;
}



const BeachPage = () => {

  useEffect(() => {
    // Function to add dots
    const addDots = () => {
      // Example positions for the red dots (x, y are percentages relative to the image container)
      const dotPositions: DotPosition[] = [
        { x: 51, y: 44 },//Imgiebah Bay // Dot 1 at 20% from left, 30% from top
        { x: 69, y: 53 },//Bahar Ic Caghaq // Dot 2 at 50% from left, 50% from top
        { x: 6, y: 17 } //Dwejra // Dot 3 at 70% from left, 10% from top
      ];

      const imageContainer = document.querySelector('.BeachPageDiv') as HTMLElement;

      dotPositions.forEach(position => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        
        // Set the dot's position relative to the image container
        dot.style.left = `${position.x}%`;
        dot.style.top = `${position.y}%`;

        imageContainer.appendChild(dot);
      });
    };

    // Call the function after the component has been mounted
    addDots();
  }, []); // Empty dependency array to ensure it runs once after mounting

  return (
    <div className='BeachPageDiv' style={{ position: 'relative' }}>
      <img src={maltaOutline} alt="Malta Outline" />
    </div>
  );
}

export default BeachPage;
