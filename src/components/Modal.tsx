import Image from 'next/image';
import React, { ReactNode, MouseEventHandler } from 'react';

interface ModalProps {
  closeModal: MouseEventHandler<HTMLButtonElement>;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-50"
    style={{ animation: 'slide-up 0.5s ease-out' }}>
      <div
        className="absolute bg-black text-white flex flex-col items-center justify-center p-10 animation-delay-2000"
        style={{ animation: 'slide-up 0.5s ease-out' }}
      >
        {/* Conteúdo do modal */}
        <picture className="rounded-full my-5 overflow-hidden">
            <Image src={`${process.env.NEXT_PUBLIC_GITHUB_PROFILE}.png`} width='200' height='200' alt=""/>
        </picture>
        <h2 className="text-4xl items-center justify-center">Você com certeza fez uma ótima escolha! 🤩</h2>
        <button onClick={closeModal} className="mt-4 text-gray-700">
          Voltar
        </button>
      </div>
    </div>
  );
};

export default Modal;
