import React from 'react';
import { FiMail } from "react-icons/fi";
import { BsLightbulb, BsPencil } from "react-icons/bs";
import { FaVectorSquare } from "react-icons/fa";

const cards = [
  {
    icon: <BsPencil size={28} className="text-[#FF014F]" />,
    title: "Web Design",
    subtitle: "120 Projects",
  },
  {
    icon: <FaVectorSquare size={28} className="text-[#FF014F]" />,
    title: "UI/UX Design",
    subtitle: "241 Projects",
  },
  {
    icon: <BsLightbulb size={28} className="text-[#FF014F]" />,
    title: "Web Research",
    subtitle: "240 Projects",
  },
  {
    icon: <FiMail size={28} className="text-[#FF014F]" />,
    title: "Marketing",
    subtitle: "331 Projects",
  },
];

const HomeCategory = () => {
    return (
         <section className="pb-15 pt-30 bg-[#060606]">
      <div className="container mx-auto px-26">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1a0e0e] rounded-lg hover:scale-105 duration-500 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform border border-gray-800"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default HomeCategory;