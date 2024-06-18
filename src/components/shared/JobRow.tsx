import Image from "next/image";
import { CiTimer } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

const JobRow = () => {
  return (
    <div className='shadow relative md:p-6 sm:p-4 p-2 rounded-md flex justify-between sm:flex-row flex-col sm:gap-4 gap-2'>
      <FaRegHeart className='absolute top-2 sm:right-6 right-3  text-pink-600' />
      <div className='flex items-center'>
        <Image
          src={"/images/icon.png"}
          width={300}
          height={300}
          alt='icon'
          className='object-cover size-12'
        />
        <div className=''>
          <h6 className='text-gray-600 text-[14px]'>Spotify</h6>
          <p className='font-bold'>Product designer</p>
          <p className='text-gray-600 sm:text-[14px] text-[12px]'>
            Remote &middot; New York, US &middot; Full-time
          </p>
        </div>
      </div>
      <div className='sm:flex gap-1 sm:items-end  sm:ml-0 ml-12 text-gray-500'>
        <span className='flex items-center sm:text-[14px] text-[12px] '>
          <CiTimer /> <span>2 hour ago</span>
        </span>
      </div>
    </div>
  );
};

export default JobRow;
