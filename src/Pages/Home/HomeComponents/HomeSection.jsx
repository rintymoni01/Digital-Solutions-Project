import React from 'react';

const HomeSection = () => {
    return (
       <div className='bg-[#060606] text-white py-20'>
  <div className='container mx-auto px-4 sm:px-6 lg:px-26'>

    <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 items-center'>

      {/* Years of Experience Card */}
      <div className="w-full lg:w-auto py-6">
        <div className="border border-gray-900 py-6 px-6 sm:px-8 lg:px-8 rounded-2xl 
                        bg-gradient-to-r from-[#FF014F] to-[#1a1a1a]
                        hover:border-t-[#FF014F] hover:border-b-[#FF014F]
                        duration-1000">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-6 items-center justify-center lg:justify-start">
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold text-white text-center sm:text-left lg:text-left">25</h1>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-center sm:text-left lg:text-left">
              Years Of <br /> experience
            </h3>
          </div>
          <p className="text-xs sm:text-sm lg:text-xs py-3 sm:py-4 lg:py-5 text-gray-200 text-center sm:text-left lg:text-left leading-relaxed">
            Business consulting consultants provide expert advice and guidance to the <br />
            businesses to help them improve their performance efficiency.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className='flex flex-col sm:flex-row lg:flex-row gap-4 lg:gap-6 w-full'>

        {/* Column 1 */}
        <div className='flex flex-col gap-4 flex-1'>
          <div className='border px-6 sm:px-8 lg:px-12 py-6 rounded-2xl bg-[#141414] border-gray-900 hover:border-t-[#FF014F] hover:border-b-[#FF014F] duration-1000'>
            <h2 className='text-2xl sm:text-3xl lg:text-3xl font-bold pt-2'>20k+</h2>
            <p className='text-sm py-2'>Our Project Complete</p>
          </div>
          <div className='border px-6 sm:px-8 lg:px-12 py-6 rounded-2xl bg-[#141414] border-gray-900 hover:border-t-[#FF014F] hover:border-b-[#FF014F] duration-1000'>
            <h2 className='text-2xl sm:text-3xl lg:text-3xl font-bold pt-2'>10k+</h2>
            <p className='text-sm py-2'>Our Project Complete</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className='flex flex-col gap-4 flex-1'>
          <div className='border px-6 sm:px-8 lg:px-12 py-6 rounded-2xl bg-[#141414] border-gray-900 hover:border-t-[#FF014F] hover:border-b-[#FF014F] duration-1000'>
            <h2 className='text-2xl sm:text-3xl lg:text-3xl font-bold pt-2'>100+</h2>
            <p className='text-sm py-2'>Our Project Complete</p>
          </div>
          <div className='border px-6 sm:px-8 lg:px-12 py-6 rounded-2xl bg-[#141414] border-gray-900 hover:border-t-[#FF014F] hover:border-b-[#FF014F] duration-1000'>
            <h2 className='text-2xl sm:text-3xl lg:text-3xl font-bold pt-2'>1000k+</h2>
            <p className='text-sm py-2'>Our Project Complete</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</div>

    );
};

export default HomeSection;