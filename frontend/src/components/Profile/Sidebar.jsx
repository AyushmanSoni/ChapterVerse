import React from 'react'

const Sidebar = ({data}) => {
  return (
    <div className='bg-white p-4 rounded flexc flex-col items-center justify-center'>
        <img src={data.avatar} className='h-[12vh]'/>
    </div>
  )
}

export default Sidebar