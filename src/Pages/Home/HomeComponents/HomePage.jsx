import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='bg-[#060606] text-white py-15 '>
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
       <Link to="/project">
        <button className="rounded-full w-full mt-3 text-center bg-[#FF014F] py-4 font-semibold hover:bg-[#e30045] duration-300">
          Application Now
        </button>
       </Link>

      </div>
    </div>
  </div>
</div>




             <div className="container mx-auto px-6 py-16 text-center">

  <p className="text-xs sm:text-sm text-[#FF014F] font-bold">
    Blog and news
  </p>

  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold py-3 leading-snug">
    Elevating Personal Branding the <br />
    through Powerful Portfolios
  </h3>

</div>


           <div className="container mx-auto px-6 pt-10">
  <div className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3 
    gap-6 
    justify-center
  ">

    {/* CARD 1 */}
    <div className="border rounded-2xl overflow-hidden border-gray-900 w-full">
      <img
        className="w-full rounded-2xl duration-700 hover:scale-105"
        src="/Image/blog-img-1.jpg"
        alt=""
      />
      <div className="py-4">
        <h4 className="text-[15px] sm:text-base font-semibold px-3">
          Inspiring the World, One Project at <br /> a Time for the man
        </h4>
        <p className="text-xs px-3 pt-3">READ MORE</p>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="border rounded-2xl overflow-hidden border-gray-900 w-full">
      <img
        className="w-full rounded-2xl duration-700 hover:scale-105"
        src="/Image/blog-img-2.jpg"
        alt=""
      />
      <div className="py-4">
        <h4 className="text-[15px] sm:text-base font-semibold px-3">
          Let’s bring your ideas to life! <br /> Contact me, and let’s
        </h4>
        <p className="text-xs px-3 pt-3">READ MORE</p>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="border rounded-2xl overflow-hidden border-gray-900 w-full">
      <img
        className="w-full rounded-2xl duration-700 hover:scale-105"
        src="/Image/blog-img-3.jpg"
        alt=""
      />
      <div className="py-4">
        <h4 className="text-[15px] sm:text-base font-semibold px-3">
          Each one showcases my approach <br /> and dedication man
        </h4>
        <p className="text-xs px-3 pt-3">READ MORE</p>
      </div>
    </div>

  </div>
</div>


        </div>
    );
};

export default HomePage;