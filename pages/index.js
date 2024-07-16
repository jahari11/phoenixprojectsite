import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 flex-wrap h-screen">
        <div class=" rounded-lg flex justify-center items-center">
          <span className='text-red-600 text-8xl font-bold uppercase text-center'>Why follow trends?</span>
        </div>
        <div class=" rounded-lg flex justify-center items-center">
        <span className='text-red-600 text-8xl font-bold uppercase text-center'>When you can set them.</span>
        </div>
        </div>
    </div>
  );
}
