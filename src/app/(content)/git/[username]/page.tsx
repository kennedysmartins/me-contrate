import React from "react";
import MainButton2 from "@/components/MainButton2";
import Spotlight from "@/components/Spotlight";
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
    <div className="w-full min-h-full h-[calc(100vh)] flex md:items-center md:justify-center bg-black/[0.93] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <Spotlight className="-top-30 left-0 md:left-60 md:-top-20"
        fill="white" />
      <div className="flex flex-col gap-8 items-center text-center justify-center">
        <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Gostaria de me contratar?
        </h1>

        <div className="flex gap-6 h-10">
          <div className="opacity-0 animation-delay-1000 animate-fadeIn pointer-events-auto z-[60]">
            <MainButton2 move={false}
            title={"Sim"}
            github={username} />
          </div>
          <div className="opacity-0 animation-delay-1000 animate-fadeIn pointer-events-auto z-[60]">
            <MainButton2 move={true}
            title={"Não"}
            github={username} />
          </div>
        </div>
      </div>
    </div>
  );
}
