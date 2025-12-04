import React from "react";
import { ImHome3 } from "react-icons/im";
import { FaToolbox } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";

const HomeSelection = () => {
  return (
    <div className="bg-[#060606] text-white py-10">
     <div className="container mx-auto px-6 py-10 flex justify-center items-center">

  <div
    className="
      grid 
      grid-cols-2      /* SM: 2 columns */
      sm:grid-cols-3   /* MD: 3 columns */
      lg:grid-cols-4   /* LG: 4 columns */
      gap-5 sm:gap-6 md:gap-8 
    "
  >

    {/* Logo 1 */}
    <div className="border border-gray-900 px-6 py-6 flex justify-center items-center">
      <img className="h-12 sm:h-14 md:h-16" src="/Image/company-logo-1 copy.svg" alt="" />
    </div>

    {/* Logo 2 */}
    <div className="border border-gray-900 px-6 py-6 flex justify-center items-center">
      <img className="h-12 sm:h-14 md:h-16" src="/Image/company-logo-1.svg" alt="" />
    </div>

    {/* Logo 3 */}
    <div className="border border-gray-900 px-6 py-6 flex justify-center items-center">
      <img className="h-12 sm:h-14 md:h-16" src="/Image/company-logo-2.svg" alt="" />
    </div>

    {/* Logo 4 */}
    <div className="border border-gray-900 px-6 py-6 flex justify-center items-center">
      <img className="h-12 sm:h-14 md:h-16" src="/Image/company-logo-3.svg" alt="" />
    </div>

    {/* Logo 5 */}
    <div className="border border-gray-900 px-6 py-6 flex justify-center items-center">
      <img className="h-12 sm:h-14 md:h-16" src="/Image/company-logo-4.svg" alt="" />
    </div>

    {/* Logo 6 */}
    <div className="border border-gray-900 px-6 py-6 flex justify-center items-center">
      <img className="h-12 sm:h-14 md:h-16" src="/Image/company-logo-5.svg" alt="" />
    </div>

    {/* Logo 7 */}
    <div className="border border-gray-900 px-6 py-6 flex justify-center items-center">
      <img className="h-12 sm:h-14 md:h-16" src="/Image/company-logo-6.svg" alt="" />
    </div>

    {/* Logo 8 */}
    <div className="border border-gray-900 px-6 py-6 flex justify-center items-center">
      <img className="h-12 sm:h-14 md:h-16" src="/Image/company-logo-7.svg" alt="" />
    </div>

  </div>
</div>


      <div className="pt-16 sm:pt-20">
  <div className="container mx-auto text-center px-4">

    {/* Small Top Text */}
    <p
      className="
        text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]
        text-[#FF014F] font-bold
      "
    >
      Latest Portfolio
    </p>

    {/* Heading */}
    <h3
      className="
        font-bold py-3
        text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px]
        leading-snug sm:leading-snug md:leading-snug lg:leading-snug
      "
    >
      Transforming Ideas into <br className="hidden sm:block" />
      Exceptional
    </h3>

    {/* Paragraph */}
    <p
      className="
        text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px]
        text-gray-500
        max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%]
        mx-auto
      "
    >
      Business consulting consultants provide expert advice and guidance 
      to businesses to help them improve their performance, efficiency, 
      and organizational structure.
    </p>

  </div>
</div>

      <div className="pt-12 sm:pt-16 md:pt-20">

  {/* TOP IMAGE GRID */}
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      gap-6 sm:gap-10 md:gap-12
      justify-center items-center px-4
    "
  >
    <div className="border border-gray-900 rounded-2xl overflow-hidden">
      <img
        className="w-full h-auto hover:scale-105 duration-700"
        src="/Image/portfoli-img-1.jpg"
        alt=""
      />
    </div>

    <div className="border border-gray-900 rounded-2xl overflow-hidden">
      <img
        className="w-full h-auto hover:scale-105 duration-700"
        src="/Image/portfoli-img-2.jpg"
        alt=""
      />
    </div>
  </div>

  {/* TEXT AREA */}
  <div
    className="
      grid
      grid-cols-1 
      sm:grid-cols-2
      gap-6 sm:gap-10 md:gap-16
      container mx-auto px-6 sm:px-10 md:px-20
      pt-6 sm:pt-8
    "
  >
    <div className="text-center sm:text-left py-4">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
        Digital Transformation Advisors
      </h3>
      <p className="text-sm text-gray-400 pt-2">Development Coaches</p>
    </div>

    <div className="text-center sm:text-left py-4">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
        Digital Transformation Advisors
      </h3>
      <p className="text-sm text-gray-400 pt-2">Development Coaches</p>
    </div>
  </div>

  {/* BOTTOM IMAGE GRID */}
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      gap-6 sm:gap-10 md:gap-12
      justify-center items-center px-4 pt-6 sm:pt-8
    "
  >
    <div className="border border-gray-900 rounded-2xl overflow-hidden">
      <img
        className="w-full h-auto hover:scale-105 duration-700"
        src="/Image/portfoli-img-1.jpg"
        alt=""
      />
    </div>

    <div className="border border-gray-900 rounded-2xl overflow-hidden">
      <img
        className="w-full h-auto hover:scale-105 duration-700"
        src="/Image/portfoli-img-2.jpg"
        alt=""
      />
    </div>
  </div>

</div>


     <div className="container mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center sm:text-left">

  {/* Small Top Text */}
  <p
    className="
      text-[#FF014F] 
      text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]
      font-semibold
    "
  >
    My Skill
  </p>

  {/* Heading */}
  <h3
    className="
      font-bold
      leading-snug
      text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px]
      pt-2
    "
  >
    Elevated Designs Personalized <br className="hidden sm:block" />
    the best Experiences
  </h3>
</div>

     <div className="">
  {/* CARD 1 */}
  <div className="container mx-auto px-6 
      flex flex-col sm:flex-row items-start sm:items-center 
      justify-between gap-4 
      pb-4 pt-8 border-b border-t border-gray-900 
      hover:bg-[#FF014F] duration-700 rounded-xl">

    {/* Icon */}
    <div className="pt-2">
      <ImHome3 className="text-4xl font-bold" />
    </div>

    {/* Title + Count */}
    <div>
      <h3 className="text-lg sm:text-xl font-bold pt-2">Ui/Visual Design</h3>
      <p className="text-xs sm:text-sm">21 Done</p>
    </div>

    {/* Description */}
    <div className="text-sm sm:text-base">
      My work is driven by the belief that thoughtful design and<br />
      strategic planning can empower brands.
    </div>

    {/* Read More */}
    <div>
      <p className="text-xs sm:text-sm font-bold pt-4">Read More</p>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="container mx-auto px-6 
      flex flex-col sm:flex-row items-start sm:items-center 
      justify-between gap-4 
      pb-4 pt-8 border-b border-gray-900 
      hover:bg-[#FF014F] duration-700 rounded-xl">

    <div className="pt-2">
      <FaPenNib className="text-4xl font-bold" />
    </div>

    <div>
      <h3 className="text-lg sm:text-xl font-bold pt-2">Ui/Visual Design</h3>
      <p className="text-xs sm:text-sm">21 Done</p>
    </div>

    <div className="text-sm sm:text-base">
      In this portfolio, you’ll find curated projects that highlight<br />
      my skills in responsive web design.
    </div>

    <div>
      <p className="text-xs sm:text-sm font-bold pt-4">Read More</p>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="container mx-auto px-6 
      flex flex-col sm:flex-row items-start sm:items-center 
      justify-between gap-4 
      pb-4 pt-8 border-b border-gray-900 
      hover:bg-[#FF014F] duration-700 rounded-xl">

    <div className="pt-2">
      <FaToolbox className="text-4xl font-bold" />
    </div>

    <div>
      <h3 className="text-lg sm:text-xl font-bold pt-2">Ui/Visual Design</h3>
      <p className="text-xs sm:text-sm">21 Done</p>
    </div>

    <div className="text-sm sm:text-base">
      Each project showcases excellence and adaptability<br />
      tailored to client needs.
    </div>

    <div>
      <p className="text-xs sm:text-sm font-bold pt-4">Read More</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default HomeSelection;
