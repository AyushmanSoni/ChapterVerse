import React from 'react'
import { Link } from 'react-router-dom';
import {FaSignOutAlt } from 'react-icons/fa';


const Sidebar = ({data}) => {
  return (
    <div className='bg-white p-4 rounded flex flex-col items-center justify-between h-[80%]'>
        <div className='flex items-center flex-col justify-center'>{""}
        <img src="https://cdn-icons-png.freepik.com/512/6596/6596121.png" className='h-[12vh]'/>
        <p className='mt-3 text-xl font-semibold text-[#086D8A]'>{data.username}</p>
        <p className='mt-1 text-normal text-[#086D8A]'>{data.email}</p>
        <div className='w-full mt-4 h-[1px] hidden bg-[#086D8A] lg:block'></div>
        </div>
        <div className='w-full flex-col items-center justify-center hidden lg:flex'>
            <Link to="/profile"
            className="text-[#086D8A] font-semibold w-full py-2 text-center hover:bg-[#DAE9ED] rounded transition-all duration-200 mt-2">
                Favourites
            </Link>
            <Link to="/profile/orderHistory"
            className="text-[#086D8A] font-semibold w-full py-2 text-center hover:bg-[#DAE9ED] rounded transition-all duration-200 mt-2">
                Order History
            </Link>
            <Link to="/profile/settings"
            className="text-[#086D8A] font-semibold w-full py-2 text-center hover:bg-[#DAE9ED] rounded transition-all duration-200 mt-2">
                Settings
            </Link>
        </div>
        <button className='bg-[#086D8A w-3/6 lg:w-full mt-4 lg:mt-0 text-[#086D8A] border border-[#086D8A] font-semibold flex items-center justify-center py-2 rounded hover:bg-[#075A71] transition-all duration-300 hover:text-white'>
        Log Out <FaSignOutAlt  className="ms-4"/>
        </button>
    </div>
  )
}

export default Sidebar