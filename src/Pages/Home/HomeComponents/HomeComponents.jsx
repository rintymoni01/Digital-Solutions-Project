import React from "react";

// Skill Component
const SkillItem = ({ title, percent }) => {
    return (
       <div className="mb-6">

    {/* Title + Percent */}
    <div className="
        flex justify-between 
        text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]
        font-semibold
    ">
        <span>{title}</span>
        <span>{percent}%</span>
    </div>

    {/* Background Bar */}
    <div className="
        w-full 
        h-[5px] sm:h-[6px] md:h-[7px] lg:h-[8px]
        bg-[#222] rounded-md mt-2 overflow-hidden
    ">
        {/* Filled Bar */}
        <div
            className="
                h-full bg-[#ff0054] rounded-md 
                transition-all duration-500
            "
            style={{ width: `${percent}%` }}
        ></div>
    </div>
</div>

    );
};

// Main Component
const HomeComponents = () => {
    return (
       <div className="bg-[#060606] mx-auto px-6 pt-20 text-white font-poppins">

  <div
    className="
      w-[90%] mx-auto
      flex flex-col md:flex-row 
      justify-between 
      gap-14 md:gap-10 lg:gap-0
    "
  >

    {/* Design Skills */}
    <div className="w-full md:w-[48%]">
      <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold mb-6">
        Design Skill
      </h2>

      <SkillItem title="PHOTOSHOP" percent="100" />
      <SkillItem title="FIGMA" percent="95" />
      <SkillItem title="ADOBE XD" percent="60" />
      <SkillItem title="ADOBE ILLUSTRATOR" percent="70" />
    </div>

    {/* Development Skills */}
    <div className="w-full md:w-[48%]">
      <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold mb-6">
        Development Skill
      </h2>

      <SkillItem title="HTML" percent="100" />
      <SkillItem title="CSS" percent="95" />
      <SkillItem title="JAVASCRIPT" percent="85" />
      <SkillItem title="REACT" percent="75" />
    </div>

  </div>
</div>

    );
};

export default HomeComponents;
