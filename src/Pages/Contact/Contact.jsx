import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div className='bg-[#060606] text-white pt-30 pb-20'>
<div className='container mx-auto flex flex-col items-center justify-center text-center'>
  <h3 className='text-3xl font-bold mb-2'>Contact</h3>
  <div className='flex gap-2 items-center'>
    <p className='text-sm hover hover:text-[#FF014F]'>Home</p>
    <IoMdArrowDropright className='text-sm'/>
    <p className='text-sm text-[#FF014F]'>Contact</p>
  </div>
</div>

           




<div className="container mx-auto pt-30 
                flex flex-col 
                sm:flex-col 
                md:flex-row 
                lg:flex-row 
                items-center 
                justify-center 
                gap-8 
                text-center px-4">

  {/* EMAIL */}
  <div className="border border-gray-900 rounded-2xl px-10 py-8 w-full sm:w-80 md:w-72 lg:w-auto">
    <div className="flex flex-col items-center justify-center text-center">
      <div className="h-12 w-12 rounded-full bg-[#431F1F] flex items-center justify-center">
        <MdOutlineMailOutline className="text-3xl text-[#FF014F]" />
      </div>
      <h3 className="text-2xl font-semibold pt-3">E-mail</h3>
      <p className="text-xs text-gray-400 py-2 font-bold">hasan@yourmail.com</p>
      <p className="text-xs text-gray-400 font-bold">themespark11@gmail.com</p>
    </div>
  </div>

  {/* PHONE */}
  <div className="border border-gray-900 rounded-2xl px-10 py-8 w-full sm:w-80 md:w-72 lg:w-auto">
    <div className="flex flex-col items-center justify-center text-center">
      <div className="h-12 w-12 rounded-full bg-[#431F1F] flex items-center justify-center">
        <FiPhone className="text-3xl text-[#FF014F]" />
      </div>
      <h3 className="text-2xl font-semibold pt-3">Call Me</h3>
      <p className="text-xs text-gray-400 py-2 font-bold">0000 - 000 - 000 00</p>
      <p className="text-xs text-gray-400 font-bold">+1234 - 000</p>
    </div>
  </div>

  {/* ADDRESS */}
  <div className="border border-gray-900 rounded-2xl px-10 py-8 w-full sm:w-80 md:w-72 lg:w-auto">
    <div className="flex flex-col items-center justify-center text-center">
      <div className="h-12 w-12 rounded-full bg-[#431F1F] flex items-center justify-center">
        <MdLocationOn className="text-3xl text-[#FF014F]" />
      </div>
      <h3 className="text-2xl font-semibold pt-3">Address</h3>
      <p className="text-xs text-gray-400 py-2 font-bold">Dhaka 102, utl 1216, road 45</p>
      <p className="text-xs text-gray-400 font-bold">House of Street</p>
    </div>
  </div>

</div>






<div className="container mx-auto px-6 py-20">
  <div className="bg-[#141414] rounded-2xl p-8 md:p-14">

    {/* Main Layout */}
    <div className="flex flex-col lg:flex-row justify-between gap-12 w-full">

      {/* Left Text Section */}
      <div className="w-full lg:w-1/2">
        <p className="text-sm text-[#FF014F] font-bold">GET IN TOUCH</p>

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
      <Link to="/">
        <button className="rounded-full w-full mt-3 text-center bg-[#FF014F] py-4 font-semibold hover:bg-[#e30045] duration-300">
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

export default Contact;