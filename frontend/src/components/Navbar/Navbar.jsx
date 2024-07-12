import React from 'react'

const Navbar = () => {
    const links =[
        {title: "Home",
        link: "/",},

        {title: "About",
        link: "/about",},

        {title: "All Books",
        link: "/all-books",},

        {title: "Cart",
        link: "/cart",},

        {title: "Profile",
        link: "/profile",},
    ];
  return (
    //justify between se links aur chapterverse opposite side chale jate h
    <div className='flex bg-[#F3F8F9] text-grey px-8 py-4 itmes-center justify-between'> 
        <div className='flex items-center '>
            <img className='h-10 me-4' src="https://www.svgrepo.com/show/53217/book-and-glasses.svg" alt="logo" />
            <h1 className='text-2xl font-semibold'>ChapterVerse</h1>
        </div>
        <div className='nav-links-chapterverse flex gap-8'>
            {links.map((items,i)=> 
            <div key={i}>
                {items.title}
            </div>
            )}
        </div>
        <div className='flex gap-8'>
        <button className='px-4 py-2 border-blue-500'></button>
        <button className='px-4 py-2v bg-white text-zinc-500'></button>
        </div>
    </div>

  )
}

export default Navbar


