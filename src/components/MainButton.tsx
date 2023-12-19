"use client"

import React, { useState, useEffect, useRef } from "react";
import Modal from "@/components/Modal";
import confetti from "canvas-confetti";

interface ButtonProps {
  move?: boolean;
  title?: string;
}

const MainButton: React.FC<ButtonProps> = ({ move = false, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [buttonPosition, setButtonPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isMouseOverLocked, setIsMouseOverLocked] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getInitialPosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setButtonPosition({ x: rect.left, y: rect.top });
  
        // Utilize a função de retorno para obter o valor atualizado imediatamente

      }
    };
  
    getInitialPosition();
  }, []);

  const handleButtonMouseOver = () => {
    if (move && buttonPosition && !isMouseOverLocked) {
      handleButtonMove()
    }
  };

  const handleButtonClick = () => {
    if (title === "Sim") {
      confetti({
        particleCount: 100,
        spread: 360,
        origin: { y: 0.5 },
      });
      setTimeout(() => {
        setShowModal(true);
      }, 300);
    } else {
      handleButtonMove()
    }
  };

  const handleButtonMove = () => {
    const newX = Math.random() * (window.innerWidth - 150);
    const newY = Math.random() * (window.innerHeight - 150);
    setButtonPosition({ x: newX, y: newY });
    setIsMouseOverLocked(true);
    setTimeout(() => {
      setIsMouseOverLocked(false);
    }, 200);
  }

  const handleModalClose = () => {
    window.location.reload();
    setShowModal(false);
  };


  return (
    <>
      
      <div
        ref={buttonRef as React.RefObject<HTMLDivElement>}
        onMouseOver={handleButtonMouseOver}
        className={`rounded text-black px-5 py-2 transition-all duration-500 ease-in-out select-none outline-none ${
          buttonPosition ? "absolute" : "static"
        }`}
        style={{
          left: buttonPosition ? `${buttonPosition.x}px` : "auto",
          top: buttonPosition ? `${buttonPosition.y}px` : "auto",
        }}
        onClick={handleButtonClick}
      >
        <a
          href="#_"
          className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 z-10"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white">{title}</span>
        </a>
      </div>
      {showModal && <Modal closeModal={handleModalClose} />}
    </>
  );
};

export default MainButton;