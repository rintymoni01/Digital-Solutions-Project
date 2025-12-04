import React, { useEffect, useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { IoSearch } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa";

const TopBlog = () => {
      const [products, setProducts] = useState([]);
    
      useEffect(() => {
        fetch("/products.json")
          .then(res => res.json())
          .then(data => {
            console.log("JSON Loaded:", data);
            setProducts(data);  // JSON is an array
          })
          .catch(err => console.log("Error:", err));
      }, []);
      const [categorys, setCategorys] = useState([]);

useEffect(() => {
  fetch("/category.json")
    .then(res => res.json())
    .then(data => {
      console.log("JSON Loaded:", data);
      setCategorys(data);  // এখানে products set করা হলো
    })
    .catch(err => console.log("Error:", err));
}, []);
     
    return (
        <div className='pt-30 text-white bg-[#060606]'>
      
              <div>
                <div className='container mx-auto flex flex-col items-center justify-center text-center'>
                  <h3 className='text-3xl font-bold mb-2'>Blog Classic</h3>
                  <div className='flex gap-2 items-center'>
                    <p className='text-sm hover hover:text-[#FF014F]'>Home</p>
                    <IoMdArrowDropright className='text-sm'/>
                    <p className='text-sm text-[#FF014F]'>Blog Classic</p>
                  </div>
                </div>



<div className="container mx-auto py-20 px-4">

  <div className="flex flex-col lg:flex-row items-start gap-10">

    {/* LEFT SIDE PRODUCTS */}
    <div className="grid grid-cols-1 gap-8 w-full lg:w-2/3">
      {products.slice(4, 7).map((p, i) => (
        <div key={i} className="border border-gray-900 w-full pb-3 overflow-hidden rounded-2xl">
          <img
            className="h-60 sm:h-72 md:h-80 w-full object-cover rounded-2xl hover:scale-105 duration-700"
            src={p.image}
            alt=""
          />
          <div className="px-3">
            <h2 className="text-2xl font-bold py-2 hover:text-[#FF014F] duration-700">
              {p.short_description}
            </h2>
            <p className="text-sm pt-1 text-gray-500">{p.long_description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* RIGHT SIDEBAR */}
    <div className="w-full lg:w-1/3">

      {/* Search box */}
      <div className="border p-6 border-gray-900 rounded-2xl">
        <div className="flex border rounded-md border-gray-900 items-center px-3">
          <input
            type="text"
            placeholder="Type here"
            className="bg-transparent outline-none flex-1 py-2"
          />
          <div className="h-10 w-10 rounded-md bg-[#FF014F] flex items-center justify-center">
            <IoSearch />
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="py-10">
        <div className="border border-gray-900 py-8 px-4 rounded-2xl">
          <h4 className="text-xl font-semibold">
            Recent Post <span className="text-[#FF014F]">.</span>
          </h4>

          <div className="pt-7 text-gray-400 space-y-4">

            <div className="flex items-center justify-between hover:text-[#FF014F] duration-700">
              <div className="flex gap-2 items-center">
                <IoIosArrowRoundForward />
                <p>Business Solution</p>
              </div>
              (01)
            </div>
            <hr className="border-gray-900" />

            <div className="flex items-center justify-between hover:text-[#FF014F] duration-700">
              <div className="flex gap-2 items-center">
                <IoIosArrowRoundForward />
                <p>Web Development Wizardry</p>
              </div>
              (08)
            </div>
            <hr className="border-gray-900" />

            <div className="flex items-center justify-between hover:text-[#FF014F] duration-700">
              <div className="flex gap-2 items-center">
                <IoIosArrowRoundForward />
                <p>Content Creation and Strategy</p>
              </div>
              (05)
            </div>
            <hr className="border-gray-900" />

            <div className="flex items-center justify-between hover:text-[#FF014F] duration-700">
              <div className="flex gap-2 items-center">
                <IoIosArrowRoundForward />
                <p>UI/UX Design Innovation</p>
              </div>
              (05)
            </div>
            <hr className="border-gray-900" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-8 py-4">
        {categorys.slice(0, 3).map((c) => (
          <div
            key={c.id}
            className="flex gap-3 border-b border-gray-900 pb-4"
          >
            <img className="h-20 w-20 object-cover rounded-xl" src={c.image} alt="" />
            <div className="w-40">
              <div className="flex items-center gap-1 text-xs">
                <FaFolderOpen className="text-[#FF014F]" />
                <h4>Category</h4>
              </div>
              <h2 className="text-xl pb-2 pt-2">{c.subcategory}</h2>
            </div>
          </div>
        ))}
      </div>

    </div>

  </div>
</div>

            </div>
      </div>
  
    );
};

export default TopBlog;