import React from 'react'
import Sidebar from "../components/Profile/Sidebar";
import {Outlet} from "react-router-dom";
const Profile = () => {
  return (
    <div className='bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 gap-4'>
      <div><Sidebar/></div>
      <div><Outlet/></div>
    </div>
  )
}

export default Profile