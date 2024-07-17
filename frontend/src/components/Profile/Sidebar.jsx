import React from 'react'

const Sidebar = ({data}) => {
  return (
    <div className='bg-white p-4 rounded flex flex-col items-center justify-center'>
        <img src="https://cdn-icons-png.freepik.com/512/6596/6596121.png" className='h-[12vh]'/>
        <p className='mt-3 text-xl font-semibold text-[#086D8A]'>{data.username}</p>
        <p className='mt-1 text-normal text-[#086D8A]'>{data.email}</p>
        <div className='w-full mt-4 h-[1px] hidden bg-[#086D8A] lg:block'>

        </div>
    </div>
  )
}

export default Sidebar