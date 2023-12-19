"use client"

import React, { useState, useEffect, useRef } from 'react';

interface ButtonProps {
  move?: boolean;
  title?: string;
}

const MainButton: React.FC<ButtonProps> = ({ move = false, title }) => {
  const [buttonPosition, setButtonPosition] = useState<{ x: number; y: number } | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const getInitialPosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setButtonPosition({ x: rect.left, y: rect.top });
      }
    };

    getInitialPosition();
  }, []); 
  const handleButtonClick = () => {
    if (title === 'Sim') {
      alert('Parabéns, você ganhou um funcionário novo ✨🤠 ');
    } else {
      const newX = Math.random() * (window.innerWidth - 100);
      const newY = Math.random() * (window.innerHeight - 50);
      setButtonPosition({ x: newX, y: newY });
    }
  };

  const handleButtonMouseOver = () => {
    if (move) {
      const newX = Math.random() * (window.innerWidth - 100);
      const newY = Math.random() * (window.innerHeight - 50);
      setButtonPosition({ x: newX, y: newY });
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseOver={handleButtonMouseOver}
      className={`bg-white rounded text-black px-5 py-2 transition-all duration-500 ease-in-out ${
        buttonPosition ? 'absolute' : 'static'
      }`}
      style={{
        left: buttonPosition ? `${buttonPosition.x}px` : 'auto',
        top: buttonPosition ? `${buttonPosition.y}px` : 'auto',
      }}
      onClick={handleButtonClick}
    >
      {title}
    </button>
  );
};

export default MainButton;
