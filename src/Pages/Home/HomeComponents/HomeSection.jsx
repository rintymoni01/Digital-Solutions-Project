import React from 'react';

const HomeSection = () => {
    return (
        <div className='bg-[#060606] text-white py-20'>
          <div className='flex justify-between container mx-auto items-center px-26'>
              <div className="py-20">
  <div className="border border-gray-900 py-10 px-8 rounded-2xl 
                  bg-gradient-to-r from-[#FF014F] to-[#1a1a1a]
                  hover:border-t-[#FF014F] hover:border-b-[#FF014F]
                  duration-1000">

    <div className="flex gap-6 items-center">
      <h1 className="text-9xl font-bold text-white">25</h1>
      <h3 className="text-4xl font-semibold text-white">
        Years Of <br />
        experience
      </h3>
    </div>

    <p className="text-xs py-5 text-gray-200">
      Business consulting consultants provide expert advice and guidance to the <br />
      businesses to help them improve their performance efficiency.
    </p>

  </div>
</div>
   
         <div  className='flex flex-col gap-4'>
               <div className='border px-12 rounded-2xl bg-[#141414]  border-gray-900 py-6 hover hover:border-t-[#FF014F] duration-1000 hover:border-b-[#FF014F]' >
               <h2 className='text-3xl font-bold pt-2'> 20k+</h2>
<p className='text-sm py-2'>Our Project Complete</p>
            </div>
            <div className=''>
                <div className='border rounded-2xl bg-[#141414] px-12 border-gray-900 py-6 hover hover:border-t-[#FF014F] duration-1000 hover:border-b-[#FF014F]'>
               <h2 className='text-3xl font-bold pt-2'> 10k+</h2>
<p className='text-sm py-2'>Our Project Complete</p>
            </div>
         </div>
             </div>
          <div className='flex flex-col gap-4'>
              <div className='border px-12 rounded-2xl bg-[#141414] border-gray-900 py-6 hover hover:border-t-[#FF014F] duration-1000 hover:border-b-[#FF014F]'>
               <h2 className='text-3xl font-bold pt-2'> 100+</h2>
<p className='text-sm py-2'>Our Project Complete</p>
            </div>
           
            <div className='border rounded-2xl px-12 bg-[#141414] border-gray-900 py-6 hover hover:border-t-[#FF014F] duration-1000 hover:border-b-[#FF014F]'>
               <h2 className='text-3xl font-bold pt-2'> 1000k+</h2>
<p className='text-sm py-2'>Our Project Complete</p>
            </div>
          </div>
       </div>
        </div>
      
    );
};

export default HomeSection;