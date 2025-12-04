import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { MdCheckCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';


const SectionComponents = () => {
    return (
        <div className='text-white bg-[#060606] py-10'>
                 <div className='items-center text-center container mx-auto justify-center'>
               <p className='text-sm text-[#FF014F] font-bold'> My Price plan</p>
<h3 className='text-3xl font-bold py-3'>Enhancing Collaboration<br />
between Remote</h3>

            </div>






<div className='pt-20'>
  {/* GRID SYSTEM ADDED */}
   <div className="
    container mx-auto 
    grid
    grid-cols-1 
    sm:grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    gap-1 
    place-items-center 
    px-24">
  
    {/* CARD 1 */}
    <div className="w-80 bg-[#141414] border border-gray-900 rounded-2xl px-8 py-8">
      <div className="border-b border-gray-800">
        <p className="text-sm font-bold">Starter</p>
        <h3 className="text-3xl font-bold py-3">$ 5.00</h3>
        <p className="text-sm font-bold pb-5">Per Month</p>
      </div>
  
      <div className="pt-5">
        <div className="flex gap-1 items-center">
          <MdCheckCircle className="text-[#FF014F] text-sm" />
          <p className="text-sm text-gray-400">5 Social Media Account</p>
        </div>
  
        <div className="flex gap-1 items-center py-3">
          <MdCheckCircle className="text-[#FF014F] text-sm" />
          <p className="text-sm text-gray-400">Free Platform Access</p>
        </div>
  
        <div className="flex gap-1 pb-8 items-center">
          <MdCheckCircle className="text-[#FF014F] text-sm" />
          <p className="text-sm text-gray-400">24/7 Customer Support</p>
        </div>
  
        <Link to="/project">
          <div className="flex gap-2 items-center border border-gray-900 justify-center rounded-full py-2 hover:bg-[#FF014F] duration-700 text-sm font-bold">
            Get Started <IoIosArrowRoundForward />
          </div>
        </Link>
      </div>
    </div>
  
    {/* CARD 2 */}
    <div className="w-80 bg-[#141414] border border-gray-900 rounded-2xl px-8 py-8">
      <div className="border-b border-gray-800">
        <p className="text-sm font-bold">Starter</p>
        <h3 className="text-3xl font-bold py-3">$ 5.00</h3>
        <p className="text-sm font-bold pb-5">Per Month</p>
      </div>
  
      <div className="pt-5">
        <div className="flex gap-1 items-center pb-3">
          <MdCheckCircle className="text-[#FF014F] text-sm" />
          <p className="text-sm text-gray-400">5 Social Media Account</p>
        </div>
  
        <div className="flex gap-1 items-center">
          <MdCheckCircle className="text-[#FF014F] text-sm" />
          <p className="text-sm text-gray-400">Free Platform Access</p>
        </div>
  
        <div className="flex gap-1 items-center py-3">
          <MdCheckCircle className="text-[#FF014F] text-sm" />
          <p className="text-sm text-gray-400">Marketing Platform</p>
        </div>
  
        <div className="flex gap-1 pb-4 items-center">
          <MdCheckCircle className="text-[#FF014F] text-sm" />
          <p className="text-sm text-gray-400">24/7 Customer Support</p>
        </div>
  
        <div className="flex gap-1 items-center pb-8">
          <MdCheckCircle className="text-[#FF014F] text-sm" />
          <p className="text-sm text-gray-400">Life time support</p>
        </div>
  
        <Link to="/blog">
          <div className="flex gap-2 items-center border border-gray-900 justify-center rounded-full py-2 hover:bg-[#FF014F] duration-700 text-sm font-bold">
            Get Started <IoIosArrowRoundForward />
          </div>
        </Link>
      </div>
    </div>
  
    {/* CARD 3 (same as card 1) */}
    <div className="w-80 bg-[#141414] border border-gray-900 rounded-2xl px-8 py-8">
      <div className="border-b border-gray-800">
        <p className="text-sm font-bold">Starter</p>
        <h3 className="text-3xl font-bold py-3">$ 5.00</h3>
        <p className="text-sm font-bold pb-5">Per Month</p>
      </div>
  
      <div className="pt-5">
        <div className="flex gap-1 items-center">
          <MdCheckCircle className="text-[#FF014F] text-sm" />
          <p className="text-sm text-gray-400">5 Social Media Account</p>
        </div>
  
        <div className="flex gap-1 items-center py-3">
          <MdCheckCircle className="text-[#FF014F] text-sm" />
          <p className="text-sm text-gray-400">Free Platform Access</p>
        </div>
  
        <div className="flex gap-1 pb-8 items-center">
          <MdCheckCircle className="text-[#FF014F] text-sm" />
          <p className="text-sm text-gray-400">24/7 Customer Support</p>
        </div>
  
        <Link to="/project">
          <div className="flex gap-2 items-center border border-gray-900 justify-center rounded-full py-2 hover:bg-[#FF014F] duration-700 text-sm font-bold">
            Get Started <IoIosArrowRoundForward />
          </div>
        </Link>
      </div>
    </div>
  
  </div>
</div>







            
            
        </div>
    );
};

export default SectionComponents;