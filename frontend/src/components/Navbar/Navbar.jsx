import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const links =[
        {title: "Home",
        link: "/",},

        {title: "All Books",
        link: "/all-books",},

        {title: "Cart",
        link: "/cart",},

        {title: "Profile",
        link: "/profile",},
    ];
  return (
    //justify between se links aur chapterverse opposite side chale jate h
    <div className='flex bg-[#F3F8F9] text-grey px-24 py-4 itmes-center 
    justify-between'> 
        <div className='flex items-center '>
            <img className='h-10 me-4' 
            src="https://www.svgrepo.com/show/53217/book-and-glasses.svg" alt="logo" />
            <h1 className='text-2xl font-semibold text-[#086D8A]'>
                Chapter<span className='text-[#032B37]'>Verse</span>
            </h1>
        </div>
        <div className='nav-links-chapterverse flex gap-16 pt-2 text-gray-500 '>
            {links.map((items,i)=> 
            <Link to={items.link}
             key={i}>
                {items.title}
            </Link>
            )}
        </div>
        <div className='flex gap-8'>
        <Link to="/Login" className='px-4 py-2 text-[#086D8A] hover:text-[#075A71]'>
            LogIn</Link>
        <Link to="/SignUp" className='px-4 py-2v bg-[#086D8A] text-white border rounded-lg
         hover:bg-[#075A71]'>SignUp</Link>
        </div>
    </div>

  ) 
}

export default Navbar


