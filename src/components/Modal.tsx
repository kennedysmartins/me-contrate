import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, MouseEventHandler } from "react";
import { FaGithub, FaLinkedin  } from "react-icons/fa";


interface ModalProps {
  closeModal: MouseEventHandler<HTMLButtonElement>;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-50 animate-slideup">
      <div className="absolute bg-black text-white flex flex-col items-center justify-center p-10">
        {/* Conteúdo do modal */}
        <picture className="rounded-full my-5 overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_GITHUB_PROFILE}.png`}
            width="200"
            height="200"
            alt={`${process.env.NEXT_PUBLIC_FULL_NAME}`}
            priority
          />
        </picture>
        <h2 className="text-4xl items-center justify-center">
          Você com certeza fez uma ótima escolha! 🤩
        </h2>
        <div className="flex gap-4 my-4">
          <Link href={process.env.NEXT_PUBLIC_GITHUB_PROFILE as string} target="_blank">
            <FaGithub className="text-4xl"/>
          </Link>

          <Link href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE as string} target="_blank">
            <FaLinkedin className="text-4xl"/>
          </Link>

        </div>
        <button onClick={closeModal} className="mt-4 text-gray-700">
          Voltar
        </button>
      </div>
    </div>
  );
};

export default Modal;
