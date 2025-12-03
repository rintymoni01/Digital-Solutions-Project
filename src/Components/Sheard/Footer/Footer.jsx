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
            <div>
          <div className='flex justify-between items-center container mx-auto px-6 border-b pb-20 border-gray-900'>
  
               <div>
            <img src="/Image/white-logo-reeni (1).png" alt="" />
            <h2 className='font-bold text-3xl py-5'>Get Ready  <span className='text-2xl '>To Create <br /> Great</span></h2>
            <div className=' flex justify-between font-bold border-gray-900 pr-3 text-xs border-b pb-6'>
                <p >Email Adress</p>
            <CgMail />
            </div>
           </div>
           <div>
            <h3 className='text-xl font-semibold '>Quick Link</h3>
<p className=' font-semibold py-2'>About Me</p>
<p className=' font-semibold'>Service</p>
<p className=' font-semibold py-2'>Contact Me</p>
<p className=' font-semibold'>Blog Post</p>
<p className=' font-semibold py-2'>Pricing</p>
           </div>
           <div className='f '>
           <h3 className='text-xl font-semibold pb-5'> Contact</h3>
           <div className='gap-2 items-center flex'>
             <div className=' h-8 w-8 rounded-full bg-[#FF014F]  flex items-center justify-center '>
                <CgMail />
             </div>
<p className=' font-semibold'> rintymoni01@.com</p>
           </div>
<div className='gap-2 flex py-3 items-center' > 
    <div className=' h-8 w-8 rounded-full bg-[#FF014F]  flex items-center justify-center '>
    <MdLocationOn />
</div>
<p className='font-semibold'>Darshona Realger ,Rangpur</p>
</div>
<div className='gap-2 flex items-center'>
    <div className=' h-8 w-8 rounded-full bg-[#FF014F]  flex items-center justify-center '>
    <FaPhoneVolume />
</div>
<p className=' font-semibold'>01834688***</p>
</div>
<div className='flex pt-4 gap-2'>
<div className=' h-8 w-8 rounded-full bg-gray-800  flex items-center justify-center '>
    <RiInstagramFill />
</div>
<div className=' h-8 w-8 rounded-full  bg-gray-800  flex items-center justify-center '>
    <FaLinkedinIn />
</div>
<div className=' h-8 w-8 rounded-full  bg-gray-800  flex items-center justify-center '>
    <IoLogoTwitter />
</div>
<div className=' h-8 w-8 rounded-full  bg-gray-800  flex items-center justify-center '>
    <FaFacebookF />
</div>

</div>
  </div>

           </div >
    
          </div>
       <div className='flex justify-between items-center container mx-auto px-6 pt-4'>
         <div className=' text-xs'>
        
<p>&copy; 2025 InversWeb | All Rights Reserved</p>
        </div>
        <div className='flex gap-3 text-xs'>
           <p> Trams & Condition</p>
<p>Privacy Policy</p>
<p>Contact Us</p>
        </div>
       </div>
  
          </div>
    );
};

export default Footer;