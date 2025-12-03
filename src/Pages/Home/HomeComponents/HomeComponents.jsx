import React from "react";

// Skill Component
const SkillItem = ({ title, percent }) => {
    return (
        <div className="mb-6 ">
            <div className="flex justify-between text-[14px]  font-semibold">
                <span>{title}</span>
                <span>{percent}%</span>
            </div>

            <div className="w-full h-[6px] bg-[#222] rounded-md mt-2 overflow-hidden">
                <div
                    className="h-[6px] bg-[#ff0054] rounded-md transition-all duration-500"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
        </div>
    );
};

// Main Component
const HomeComponents = () => {
    return (
        <div className="bg-[#060606] mx-auto px-6 pt-20 ">  {/* FULL PAGE BG */}

            <div className="flex justify-between w-[90%] mx-auto text-white font-poppins">

                {/* Design Skills */}
                <div className="w-[48%]">
                    <h2 className="text-[26px] font-bold mb-6">Design Skill</h2>

                    <SkillItem title="PHOTOSHOP" percent="100" />
                    <SkillItem title="FIGMA" percent="95" />
                    <SkillItem title="ADOBE XD" percent="60" />
                    <SkillItem title="ADOBE ILLUSTRATOR" percent="70" />
                </div>

                {/* Development Skills */}
                <div className="w-[48%]">
                    <h2 className="text-[26px] font-bold mb-6">Development Skill</h2>

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
