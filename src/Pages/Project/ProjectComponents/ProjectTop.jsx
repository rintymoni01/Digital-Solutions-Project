import React, { useEffect, useState } from 'react';

const ProjectTop = () => {
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
 

  return (
    <div className="pt-30 text-white bg-[#060606]">
      
<div className="container mx-auto px-4 lg:px-28">

  <div className="grid 
                  grid-cols-1 
                  sm:grid-cols-2 
                  md:grid-cols-2 
                  lg:grid-cols-2 
                  gap-5">

    {products.slice(0, 4).map((p, i) => (
      <div
        key={i}
        className="border border-gray-900 w-full pb-3 overflow-hidden rounded-2xl"
      >
        <img
          className="h-52 sm:h-64 md:h-72 lg:h-90 
                     w-full object-cover rounded-2xl 
                     hover:scale-105 duration-700"
          src={p.image}
          alt=""
        />

        <div className="px-3">
          <h2 className="text-xl font-bold py-2 w-full 
                         hover:text-[#FF014F] duration-700">
            {p.name}
          </h2>

          <p className="text-sm pt-1 text-gray-300">{p.category}</p>
        </div>
      </div>
    ))}

  </div>

</div>

    </div>
  );
};

export default ProjectTop;
