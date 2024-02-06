import Image from "next/image";
import Link from "next/link";
import React, { MouseEventHandler } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface ModalProps {
  closeModal: MouseEventHandler<HTMLButtonElement>;
  github?: string | undefined;
  linkedin?: string | undefined;
}

const Modal: React.FC<ModalProps> = ({ closeModal, github, linkedin }) => {
  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-[1000] animate-slideup">

      <div className="absolute bg-black text-white flex flex-col items-center justify-center p-10 opacity-0 animation-delay-1000 animate-fadeIn z-[1000]">
        {/* Conteúdo do modal */}
        <picture className="rounded-full my-5 overflow-hidden">
          {github ? (<Image
            src={`https://github.com/${github}.png`}
            width="200"
            height="200"
            alt={`Imagem de perfil do ${github}`}
            priority
          />) :(<Image
            src={`/choose.png`}
            width="200"
            height="200"
            alt={`Imagem de escolhido`}
            priority
          />)}
  
        </picture>
        <h2 className="md:text-4xl items-center justify-center text-center text-xl">
          Você com certeza fez uma ótima escolha! 🤩
        </h2>
        <h3 className="md:text-2xl items-center justify-center text-lg mt-2  text-gray-400 opacity-0 animation-delay-1500 animate-fadeIn">
          Acesse meu perfil abaixo 🔗
        </h3>
        <div className="flex gap-4 my-4 opacity-0 animation-delay-2000 animate-fadeIn">
          {github && (
            <Link href={`https://github.com/${github}`} target="_blank">
              <FaGithub className="text-4xl" />
            </Link>
          )}

          {linkedin && (
            <Link href={`https://linkedin.com/in/${linkedin}`} target="_blank">
              <FaLinkedin className="text-4xl" />
            </Link>
          )}
        </div>
        <button onClick={closeModal} className="mt-4 text-gray-700 opacity-0 animation-delay-3500 animate-fadeIn">
          Voltar
        </button>
      </div>
    </div>
  );
};

export default Modal;
