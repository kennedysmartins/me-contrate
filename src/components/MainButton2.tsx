"use client";

import React, { useState, useEffect, useRef } from "react";
import Modal from "@/components/Modal";
import confetti from "canvas-confetti";

interface ButtonProps {
  move?: boolean;
  title?: string;
  github?: string | undefined;
  linkedin?: string | undefined; 
}

const MainButton2: React.FC<ButtonProps> = ({
  move = false,
  title,
  github,
  linkedin,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [buttonPosition, setButtonPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isMouseOverLocked, setIsMouseOverLocked] = useState(false);
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

  const handleButtonMouseOver = () => {
    if (!move) return;

    if (move && buttonPosition && !isMouseOverLocked) {
      handleButtonMove();
    }
  };

  const handleButtonClick = () => {
    console.log("click");

    if (title === "Sim") {
      confetti({
        particleCount: 100,
        spread: 360,
        origin: { y: 0.5 },
      });
      setTimeout(() => {
        document.querySelectorAll("button").forEach((button) => {
          button.style.display = "none";
        })
        setShowModal(true);
      }, 300);
    } else {
      handleButtonMove();
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
  };

  const handleModalClose = () => {
    window.location.reload();
  };

  return (
    <>
      <button
        className={`bg-transparent text-transparent drop-shadow-2xl text-2xl md:px-10 md:py-4 px-5 py-2 md:rounded-2xl rounded-lg bg-gradient-to-b from-white/80 to-white/20 text-gray-900 dark:text-gray-900 font-semibold border-none ${
          buttonPosition ? "absolute" : "static"
        } transition-all duration-300`}
        ref={buttonRef as React.RefObject<HTMLButtonElement>}
        onMouseOver={handleButtonMouseOver}
        style={{
          left: buttonPosition ? `${buttonPosition.x}px` : "auto",
          top: buttonPosition ? `${buttonPosition.y}px` : "auto",
        }}
        onClick={handleButtonClick}
      >
        {title}
      </button>
      {showModal && (
        <Modal
          github={github}
          linkedin={linkedin}
          closeModal={handleModalClose}
        />
      )}
    </>
  );
};

export default MainButton2;
