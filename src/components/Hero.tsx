"use client";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div className='md:py-12 py-6 md:px-10 px-4'>
      <h1 className='text-xl font-bold text-center sm:text-4xl'>
        Find your next <br /> dream job{" "}
      </h1>
      <p className='text-center text-gray-600 my-2 text-[12px] md:text-[16px]'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
        voluptate iusto veritatis beatae aliquid libero tempore
      </p>
      <form action='' className='flex items-center relative max-w-xl mx-auto'>
        <input
          type='text'
          className='border w-full sm:py-2 h-9 py-1.5 sm:px-3 px-2 border-gray-400 text-[12px] md:text-[18px]'
          placeholder='Search ...'
        />
        <button className='h-full bg-blue text-light py-1.5 sm:py-2.5 absolute top-0 right-0  sm:px-3 px-2'>
          <CiSearch className='md:text-[18px] text-[14px]' />
        </button>
      </form>
    </div>
  );
};

export default Hero;
