import React from "react";
import MainButton from "@/components/MainButton";
type Params = {
  params: { username: string };
};

export async function generateMetadata({ params: { username } }: Params) {
  return {
    openGraph: {
      title: `Me contrate - ${username}`,
      description: "Clique aqui e veja se é capaz de não me contratar!",
      siteName: "Me contrate",
      images: [{ url: `https://github.com/${username}.png` }],
      locale: "pt_BR",
      type: "website",
    },
  };
}

export default function mePage({ params: { username } }: Params) {
  return (
    <main className="bg-gray-50 flex flex-col items-center py-[40dvh] px-10 h-[100dvh] z-30">
      <div className="relative flex opacity-0 animation-delay-1000 animate-fadeIn">
        <div className="absolute top-0 left-6 lg:w-72 lg:h-72 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animation-delay-1000  animate-blob"></div>
        <div className="absolute top-0 -right-4 lg:w-72 lg:h-72 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob  animation-delay-3000 "></div>
        <div className="absolute -bottom-20 -left-20 lg:w-72 lg:h-72 w-32 h-32  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animation-delay-4000  animate-blob"></div>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="lg:text-3xl text-lg font-bold py-5 z-30 text-gray-800 animate-fadeIn">
          Gostaria de me contratar?
        </h1>
      </div>
      <div className="flex gap-2">
        <div className="opacity-0 animation-delay-1000 animate-fadeIn">
          <MainButton
            move={false}
            title={"Sim"}
            github={username}
            linkedin={username}
          />
        </div>
        <div className="opacity-0 animation-delay-1500 animate-fadeIn">
          <MainButton
            move={true}
            title={"Não"}
            github={username}
            linkedin={username}
          />
        </div>
      </div>
    </main>
  );
}
