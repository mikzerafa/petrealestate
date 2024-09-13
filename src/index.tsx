import ReactDOM from 'react-dom/client';
import '../src/css/index.css';
import App from './App';

import background from '../src/logo/bg3.jpg';

import React, { useState, useEffect } from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

const ImageFollowMouse: React.FC = () => { 
  const [offset, setOffset] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);

  useEffect(() => {
    if (isMobileDevice()) {
      // Gyroscope for mobile devices
      const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
        const { beta, gamma } = event;

        const maxTilt = 45;
        const limitedBeta = Math.max(Math.min(beta || 0, maxTilt), -maxTilt);
        const limitedGamma = Math.max(Math.min(gamma || 0, maxTilt), -maxTilt);

        const betaPercent = (limitedBeta / maxTilt) * 50;
        const gammaPercent = (limitedGamma / maxTilt) * 50;

        setOffset(gammaPercent);
        setOffsetY(betaPercent);
      };
      console.log('is mobile');
      window.addEventListener('deviceorientation', handleDeviceOrientation);

      return () => {
        //window.removeEventListener('deviceorientation', handleDeviceOrientation);
      };
    } else {
      console.log('is desktop')
      // Mouse movement for non-mobile devices
      const handleMouseMove = (e: MouseEvent) => {
        const windowWidth = window.innerWidth;
        const mouseXPercent = (e.clientX / windowWidth) * 3.125;
        setOffset(0-mouseXPercent);
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div className="image-container">
      <div className="backgroundDiv animated-image">
      </div>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
    <ImageFollowMouse />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
