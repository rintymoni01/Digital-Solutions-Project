import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';


const AboutMid = () => {
    return (
        <div className='bg-[#060606] text-white'>


<div className="container mx-auto px-6 py-20">
  <div className="bg-[#141414] rounded-2xl p-8 md:p-14">

    {/* Main Layout */}
    <div className="flex flex-col lg:flex-row justify-between gap-12 w-full">

      {/* Left Text Section */}
      <div className="w-full lg:w-1/2">
        <p className="text-sm text-[#FF014F] font-bold">Latest Service</p>

        <h3 className="text-2xl md:text-3xl font-bold py-4">
          Elevate your brand <br /> with Me
        </h3>

        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
          ished fact that a reader will be distrol acted bioiiy <br />
          desig ished fact that a reader will acted ished fact <br />
          that a reader will be distrol acted
        </p>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-7">

        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-7">
          <div className="border border-gray-800 py-3 px-4 rounded-md w-full">
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>

          <div className="border border-gray-800 py-3 px-4 rounded-md w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-7">
          <div className="border border-gray-800 py-3 px-4 rounded-md w-full">
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>

          <div className="border border-gray-800 py-3 px-4 rounded-md w-full">
            <input
              type="number"
              placeholder="Enter your age"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="border border-gray-800 px-4 pb-24 rounded-md w-full">
          <input
            type="text"
            placeholder="Your message"
            className="bg-transparent outline-none text-white w-full"
          />
        </div>

        {/* Button */}
       <Link to="/contact">
        <button className="rounded-full mt-3 w-full text-center bg-[#FF014F] py-4 font-semibold hover:bg-[#e30045] duration-300">
          Application Now
        </button>
       </Link>

      </div>
   
  </div>
</div>
</div>










        </div>
    );
};

export default AboutMid;