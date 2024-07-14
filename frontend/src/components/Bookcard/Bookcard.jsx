import React from 'react';
import { Link } from 'react-router-dom';

const Bookcard = ({ data }) => {
  console.log(data);
  return (
    // <Link to={`/book/${data.id}`} className="block">
    //   <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between">
    //     <div className="overflow-hidden rounded-lg mb-4">
    //       <img src={data.url} alt={data.title} className="w-full h-60 object-cover sm:h-72 md:h-80" />
    //     </div>
    //     <div className="text-left flex-grow flex flex-col justify-between">
    //       <div>
    //         <h3 className="text-lg sm:text-xl font-semibold text-[#032B37]">{data.title}</h3>
    //         <p className="text-sm sm:text-md text-gray-700 mt-2">by {data.author}</p>
    //       </div>
    //       <p className="text-md sm:text-lg text-[#086D8A] mt-4 font-bold">${data.price}</p>
    //     </div>
    //   </div>
    // </Link>
    <Link to={`/book/${data.id}`} className="block">
    <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="rounded-lg flex items-center justify-center">
        <img src={data.url} alt="/" className="h-25[vh]" />
      </div>
      <h3 className="mt-4 text-lg sm:text-xl font-semibold text-[#032B37]">{data.title}</h3>
      <p className="mt-2 text-sm sm:text-md text-gray-700 ">by {data.author}</p>
      <p className="text-md sm:text-lg text-[#086D8A] mt-2 font-bold">${data.price}</p>
    </div>
  </Link>
  );
};

export default Bookcard;
