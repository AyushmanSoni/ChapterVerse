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
    <div className='flex bg-[#F3F8F9] text-grey px-24 py-4 itmes-center justify-between'> 
        <div className='flex items-center '>
            <img className='h-10 me-4' src="https://www.svgrepo.com/show/53217/book-and-glasses.svg" alt="logo" />
            <h1 className='text-2xl font-semibold'>ChapterVerse</h1>
        </div>
        <div className='nav-links-chapterverse flex gap-16 pt-2'>
            {links.map((items,i)=> 
            <div key={i}>
                {items.title}
            </div>
            )}
        </div>
        <div className='flex gap-8'>
        <button className='px-4 py-2 text-[#086D8A] hover:text-[#075A71]'>SignIn</button>
        <button className='px-4 py-2v bg-[#086D8A] text-white border rounded-lg hover:bg-[#075A71]'>SignUp</button>
        </div>
    </div>

  ) 
}

export default Navbar


