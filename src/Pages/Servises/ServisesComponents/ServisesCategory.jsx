import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';

const ServisesCategory = () => {
    return (
        <div className='text-white bg-[#060606] pt-30'>
         <div className='container mx-auto flex flex-col items-center justify-center text-center'>
                          <h3 className='text-3xl font-bold mb-2'>My Service</h3>
                          <div className='flex gap-2 items-center'>
                            <p className='text-sm hover hover:text-[#FF014F]'>Home</p>
                            <IoMdArrowDropright className='text-sm'/>
                            <p className='text-sm text-[#FF014F]'>Service</p>
                          </div>
                        </div>







        <div className="py-20 container mx-auto">
  <div
    className="
      grid 
      grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-2 
      gap-5 
      justify-center
    "
  >
    {/* COLUMN 1 */}
    <div className="flex flex-col gap-5">
      <div className="py-6 bg-[#141414] px-6 rounded-2xl">
        <div className="flex gap-3">
          <p className="text-2xl font-semibold">01.</p>
          <h3 className="text-2xl font-semibold">A Portfolio of Creativity</h3>
        </div>
        <p className="text-sm pt-4 text-gray-500">
          Business consulting consultants provide expert advice and guida the a <br />
          businesses to help theme their performance efficiency
        </p>
      </div>

      <div className="py-6 bg-[#141414] px-6 rounded-2xl">
        <div className="flex gap-3">
          <p className="text-2xl font-semibold">02.</p>
          <h3 className="text-2xl font-semibold">My Portfolio of Innovation</h3>
        </div>
        <p className="text-sm pt-4 text-gray-500">
          My work is driven by the belief that thoughtful design and strategic <br />
          planning can empower brands, transform businesses
        </p>
      </div>

      <div className="py-6 bg-[#141414] px-6 rounded-2xl">
        <div className="flex gap-3">
          <p className="text-2xl font-semibold">03.</p>
          <h3 className="text-2xl font-semibold">A Showcase of My Projects</h3>
        </div>
        <p className="text-sm pt-4 text-gray-500">
          In this portfolio, you’ll find a curated selection of projects that highlight <br />
          my skills in Main Areas, e.g., responsive web design
        </p>
      </div>
    </div>

    {/* COLUMN 2 */}
    <div className="flex flex-col gap-5">
      <div className="py-6 bg-[#141414] px-6 rounded-2xl">
        <div className="flex gap-3">
          <p className="text-2xl font-semibold">04.</p>
          <h3 className="text-2xl font-semibold">A Portfolio of Creativity</h3>
        </div>
        <p className="text-sm pt-4 text-gray-500">
          Business consulting consultants provide expert advice and guida the a <br />
          businesses to help theme their performance efficiency
        </p>
      </div>

      <div className="py-6 bg-[#141414] px-6 rounded-2xl">
        <div className="flex gap-3">
          <p className="text-2xl font-semibold">05.</p>
          <h3 className="text-2xl font-semibold">My Portfolio of Innovation</h3>
        </div>
        <p className="text-sm pt-4 text-gray-500">
          My work is driven by the belief that thoughtful design and strategic <br />
          planning can empower brands, transform businesses
        </p>
      </div>

      <div className="py-6 bg-[#141414] px-6 rounded-2xl">
        <div className="flex gap-3">
          <p className="text-2xl font-semibold">06.</p>
          <h3 className="text-2xl font-semibold">A Showcase of My Projects</h3>
        </div>
        <p className="text-sm pt-4 text-gray-500">
          In this portfolio, you’ll find a curated selection of projects that highlight <br />
          my skills in Main Areas, e.g., responsive web design
        </p>
      </div>
    </div>
  </div>
</div>

            
      </div>
        
        
    );
};

export default ServisesCategory;