import React from 'react';
import { CgMail } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' bg-[#060606] text-white pb-10'>
    <div className='bg-[#060606] text-white '>

  {/* Footer Main */}
  <div className='container mx-auto  px-4 sm:px-6 lg:px-6 py-10'>
    <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-start border-b pb-20 border-gray-900'>

      {/* Logo & Email */}
      <div className='flex-1 '>
        <img src="/Image/white-logo-reeni (1).png" alt="" className="mb-4"/>
        <h2 className='font-bold text-3xl sm:text-4xl lg:text-3xl py-5'>
          Get Ready  <span className='text-2xl font-semibold'>To Create  <br />Great</span>
        </h2>
        <div className='flex gap-25 items-center font-bold   border-gray-900 pb-6'>
          <p className='text-xs sm:text-sm'>Email Address</p>
          <CgMail className='text-lg sm:text-xl'/>
        </div>
       <hr className='w-60'/>
      
      </div>
 
      {/* Quick Links */}
      <div className='flex-1'>
        <h3 className='text-xl font-semibold mb-4'>Quick Link</h3>
        <div className='flex flex-col gap-2 text-sm sm:text-base'>
          <p className='font-semibold py-1'>About Me</p>
          <p className='font-semibold py-1'>Service</p>
          <p className='font-semibold py-1'>Contact Me</p>
          <p className='font-semibold py-1'>Blog Post</p>
          <p className='font-semibold py-1'>Pricing</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className='flex-1'>
        <h3 className='text-xl font-semibold mb-5'>Contact</h3>

        <div className='flex items-center gap-2 mb-3'>
          <div className='h-8 w-8 rounded-full bg-[#FF014F] flex items-center justify-center'>
            <CgMail />
          </div>
          <p className='font-semibold text-sm sm:text-base'>rintymoni01@.com</p>
        </div>

        <div className='flex items-center gap-2 mb-3'>
          <div className='h-8 w-8 rounded-full bg-[#FF014F] flex items-center justify-center'>
            <MdLocationOn />
          </div>
          <p className='font-semibold text-sm sm:text-base'>Darshona Realger, Rangpur</p>
        </div>

        <div className='flex items-center gap-2 mb-3'>
          <div className='h-8 w-8 rounded-full bg-[#FF014F] flex items-center justify-center'>
            <FaPhoneVolume />
          </div>
          <p className='font-semibold text-sm sm:text-base'>01834688***</p>
        </div>

        {/* Social Icons */}
        <div className='flex gap-2 mt-4'>
          <div className='h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center'>
            <RiInstagramFill />
          </div>
          <div className='h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center'>
            <FaLinkedinIn />
          </div>
          <div className='h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center'>
            <IoLogoTwitter />
          </div>
          <div className='h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center'>
            <FaFacebookF />
          </div>
        </div>

      </div>
 
    </div>
   
  </div>
 

  {/* Footer Bottom Bar */}
  <div className='bg-[#060606] text-white py-4'>
    <div className='container mx-auto px-4 sm:px-6 lg:px-6 flex flex-col lg:flex-row justify-between items-center gap-3'>

      {/* Copyright */}
      <div className='text-xs text-center lg:text-left'>
        <p>&copy; 2025 InversWeb | All Rights Reserved</p>
      </div>

      {/* Links */}
      <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 text-xs text-center lg:text-right'>
        <p>Terms & Condition</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
      </div>

    </div>
  </div>

</div>

  
          </div>
    );
};

export default Footer;