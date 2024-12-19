import PereNoel from '../asset/pere_noel.svg';
import Snowflakes from './Snowflakes';
import '../styles/animations.css';
import { useState, useEffect } from 'react';

export function WelcomeScreen({ onStart }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      onStart();
    }, 500); // Durée de l'animation
  };

  return (
    <div className={`page-loaded ${isLoaded ? 'page-loaded' : ''}`}>
      <img src={PereNoel} alt="Père Noël" />
      <Snowflakes />
      <div className="text-center space-y-6 mt-24">
        <h1 className="text-5xl font-bold text-primary text-white mt-20" style={{ fontFamily: 'var(--title-font)' }}>
          Secret Santa
        </h1>
        <p className="text-xl text-white p-4 font-extrabold my-10" style={{ fontFamily: 'var(--text-font)' }}>
          Bienvenue dans l’application Secret Santa ! Organisez facilement votre échange de cadeaux entre amis et collegues !
        </p>
        <button
          onClick={handleClick}
          className={`button text-2xl px-8 py-3 stroke-2 bg-white rounded-4xl text-rouge ${isClicked ? 'button-clicked' : ''}`}
          style={{ fontFamily: 'var(--title-font)' }}
        >Continuer</button>
      </div>
    </div>
  );
}