import React from 'react';

const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-50">
      <div className="absolute bg-black text-white flex flex-col items-center p-10">
        {/* Conteúdo do modal */}
        <h2 className="text-4xl">Você contratou um funcionário novo, parabéns?</h2>
      </div>
    </div>
  );
};

export default Modal;