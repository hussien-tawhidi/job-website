"use client";

import Link from "next/link";

const Header = () => {
  return (
    <nav className='flex justify-between items-center py-4 px-6'>
      <Link
        href='/'
        className='font-bold opacity-90 md:text-2xl border-b border-gray-600 text-md'>
        Job Board
      </Link>
      <div className='flex md:gap-4 gap-2  sm:*:text-[16px] text-[12px] sm:*:py-2 *:py-1.5 *:px-3  sm:*:px-4 *:rounded'>
        <Link href='/login'>Login</Link>
        <Link href='/new-listing' className="bg-blue text-light">Post a job</Link>
      </div>
    </nav>
  );
};

export default Header;
