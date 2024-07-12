import React from 'react'

const Hero = () => {
  return (
    <div className='h-[75vh] '>
        <div className='w-3/6 py-4 mt-12'> <h1 className='text-6xl font-bold text-[#032B37]'>Today A&nbsp; 
        <span className='text-[#086D8A]'>Reader,</span></h1></div>
        <div className='w-3/6'> <h1 className='text-6xl font-bold text-[#032B37]'>Tomorrow A&nbsp; 
        <span className='text-[#086D8A]'>Leader</span></h1></div>
        <div className='w-3/6'>
            <p className='text-xl text-gray-500 mt-8 font-medium'>
                Find your next great read from our extensive collection of books across all genres. Join our community of book lovers and start your reading journey today!
            </p></div>
        <div className='w-3/6 mt-8'>
            <button className='bg-[#086D8A] text-white text-lg font-semibold py-2 px-8 rounded hover:bg-[#065b70]'>
                Discover Books
            </button>
      </div>
      <div className='w-3/6 mt-8 grid grid-cols-2 gap-4'>
        <div className='flex items-center'>
          <span className='text-green-500 mr-2'>✔️</span>
          <span className='text-gray-500 font-medium'>Wide range of genres</span>
        </div>
        <div className='flex items-center'>
          <span className='text-green-500 '>✔️</span>
          <span className='text-gray-500 font-medium'>Affordable prices</span>
        </div>
        <div className='flex items-center'>
          <span className='text-green-500 mr-2'>✔️</span>
          <span className='text-gray-500 font-medium'>Exclusive collections</span>
        </div>
        <div className='flex items-center'>
          <span className='text-green-500 mr-2'>✔️</span>
          <span className='text-gray-500 font-medium'>Fast shipping</span>
        </div>
      </div>
    </div>
  )
}

export default Hero