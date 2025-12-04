import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
             <section className="w-full bg-cover bg-[url(/Image/banner-background-one.jpg)] bg-center text-white relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1a0e0e] to-black opacity-50"></div>{" "}
      {/* Content */}
      <div className="container mx-auto relative z-10 px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
       
        {/* Left Side: Text + Buttons */}
        <div className="text-center md:text-left flex-1">
        
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            
            Creative Design & Digital Solutions
          </h1>
          <p className="text-gray-300 mt-5 max-w-lg text-lg">
         
            We build modern websites, branded UI/UX, and complete digital
            identity that gives your business a powerful online presence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
           
           <Link to="/blog">
            <button className="px-7 py-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full font-semibold hover:scale-105 transition">
            
              Get Started
            </button>
           </Link>
            <Link to="/about">
            <button className="px-7 py-3 border border-gray-400 rounded-full font-semibold hover:bg-white hover:text-black transition">
           
              Learn More
            </button>
            </Link>
          </div>
        </div>
        {/* Right Side: Hero Image */}
        <div className="flex-1 pt-30 flex justify-center md:justify-end">
         
          <img
            src="/Image/banner-user-image-one.png"
            alt="Hero"
            className="w-[300px] h-170 sm:w-[350px] md:w-[480px] object-contain"
          />
        </div>
      </div>
    </section>
        </div>
    );
};

export default Hero;