import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { MdCheckCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <div className='bg-[#060606] text-white'>
           
         <div className="container  mx-auto px-4 sm:px-6 lg:px-12 py-16">

  <div className="flex flex-col lg:flex-row gap-8">

    {/* Left Column */}
    <div className="flex flex-col gap-8 w-full lg:w-1/2">

      {/* Range + Label */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <p className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-0">Education</p>
        <div className="w-full sm:w-56">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-1 bg-[#1f1f1f] rounded-md appearance-none cursor-pointer accent-white"
          />
        </div>
      </div>

      {/* Card 1 */}
      <div className="bg-[#141414] py-8 px-6 sm:px-8 rounded-2xl">
        <p className="text-xs sm:text-sm">Trainer Marketing</p>
        <h3 className="text-sm sm:text-base font-bold pt-2 pb-3">2005-2009</h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          A personal portfolio is a curated collection of an individual's professional <br />
          work, showcasing their skills, experience A personal portfolio.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#141414] py-8 px-6 sm:px-8 rounded-2xl">
        <p className="text-xs sm:text-sm">Assistant Director</p>
        <h3 className="text-sm sm:text-base font-bold pt-2 pb-3">2010-2014</h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          Each project here showcases my commitment to excellence and adaptability,<br />
          tailored to meet each client’s unique needs.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div className="flex flex-col gap-8 w-full pt-16 lg:w-1/2">

      {/* Card 3 */}
      <div className="bg-[#141414] py-8 px-6 sm:px-8 rounded-2xl">
        <p className="text-xs sm:text-sm">Design Assistant</p>
        <h3 className="text-sm sm:text-base font-bold pt-2 pb-3">2005-2009</h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          I’ve had the privilege of working with various clients, from startups to<br />
          established companies, helping bring their visions to life.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#141414] py-8 px-6 sm:px-8 rounded-2xl">
        <p className="text-xs sm:text-sm">Trainer Marketing</p>
        <h3 className="text-sm sm:text-base font-bold pt-2 pb-3">2008-2012</h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          A personal portfolio is a curated collection of an individual's professional<br />
          work, showcasing their skills, experience A personal portfolio.
        </p>
      </div>

    </div>
  </div>
</div>





<div className="container mx-auto px-6 sm:px-6 lg:px-12 py-16">
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-18">

    <div className="flex-1 mt-6 lg:mt-0 flex justify-center lg:justify-end">
      <img
        className="h-70 sm:h-72 md:h-80 w-full max-w-xs sm:max-w-sm md:max-w-md rounded-3xl object-cover"
        src="/Image/expert-img-two.jpg"
        alt="Expert"
      />
    </div>

    {/* Left Text Section */}
    <div className="flex-1 flex flex-col gap-6">

      {/* Range + Label */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <p className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-0">Experiences</p>
        <div className="w-full sm:w-56">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-1 bg-[#1f1f1f] rounded-md appearance-none cursor-pointer accent-white"
          />
        </div>
      </div>

      {/* Experience 1 */}
      <div className="pt-4">
        <p className="text-[#FF014F] text-xs sm:text-sm">Experience</p>
        <h2 className="text-lg sm:text-xl font-bold py-1">Soft Tech (2 Years)</h2>
        <h3 className="text-sm sm:text-base">UI/UX Designer</h3>
        <p className="text-xs sm:text-sm text-gray-500 pt-2 leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse <br />
          cillum desi dolore eu fugiat nulla pariatu Duis aute irure.
        </p>
      </div>

      {/* Experience 2 */}
      <div className="pt-4">
        <p className="text-[#FF014F] text-xs sm:text-sm">Experience</p>
        <h2 className="text-lg sm:text-xl font-bold py-1">ModernTech (3 Years)</h2>
        <h3 className="text-sm sm:text-base">Web Designer</h3>
        <p className="text-xs sm:text-sm text-gray-500 pt-2 leading-relaxed">
          In this portfolio, you’ll find a curated selection of projects that highlight <br />
          my skills in Main Areas, e.g., responsive web design.
        </p>
      </div>

    </div>

    {/* Right Image Section */}
    

  </div>
</div>




                      <div className="container mx-auto px-6 pt-16 text-center">

  {/* Top Label */}
  <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-[#FF014F] font-bold">
    My Price plan
  </p>

  {/* Heading */}
  <h3 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] font-bold py-3 leading-snug">
    Enhancing Collaboration <br className="hidden sm:block" />
    between Remote
  </h3>

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

export default AboutSection;