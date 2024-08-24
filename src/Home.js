import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const heroTextHeight = document.querySelector('.hero-text')?.offsetHeight || 0;
      const positionB = heroTextHeight; // Höhe von Position B
    
      const boxes = document.querySelectorAll('.box');
      boxes.forEach((box) => {
        const boxPosition = windowHeight; // Position A am unteren Rand des Viewports
        box.style.transform = `translateY(${Math.max(boxPosition - scrollY, positionB - boxPosition)}px)`;
      });
    };
    

    const initializeBoxes = () => {
      const boxes = document.querySelectorAll('.box');
      const windowHeight = window.innerHeight;
      boxes.forEach((box) => {
        box.style.transform = `translateY(${windowHeight}px)`; // Setzt Boxen auf Position A
      });
    };

    // Initialisiere Boxen und handle den Scroll
    initializeBoxes();
    handleScroll(); // Setzt Boxen richtig beim ersten Scroll

    // Setze den Scroll-Offset zurück
    window.scrollTo(0, 0);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      <h1 className="hero-text">Hi, I'm Celo!</h1>
      <p className="hero-description">Scroll down to see more</p>
      <svg
        className="scroll-indicator"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
      <div className="boxes">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="wave-container">
        <svg
          className="wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path fill="#3A5A42" fillOpacity="1" d="M0,96L34.3,128C68.6,160,137,224,206,213.3C274.3,203,343,117,411,101.3C480,85,549,139,617,144C685.7,149,754,107,823,80C891.4,53,960,43,1029,69.3C1097.1,96,1166,160,1234,165.3C1302.9,171,1371,117,1406,90.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </div>
      <div className="bottom-background"></div>
    </div>
  );
}

export default Home;
