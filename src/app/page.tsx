import React from 'react';
import MainButton from '@/components/MainButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-10">
      <h1 className="flex flex-nowrap">Gostaria de me contratar?</h1>
      <div className="flex gap-2">
        <MainButton move={false} title={'Sim'} />
        <MainButton move={true} title={'Não'} />
      </div>
    </main>
  );
}