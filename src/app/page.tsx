import React from "react";
import MainButton from "@/components/MainButton";

export default function Home() {
  return (
    <main
    className="flex flex-col items-center py-[40dvh] px-10 h-[100dvh]"
    >
      <div className="flex items-center justify-center">
        <h1 className="lg:text-3xl text-lg py-5">
          Gostaria de me contratar?
        </h1>
      </div>
      <div className="flex gap-2">
        <MainButton move={false} title={"Sim"} />
        <MainButton move={true} title={"Não"} />
      </div>
    </main>
  );
}
