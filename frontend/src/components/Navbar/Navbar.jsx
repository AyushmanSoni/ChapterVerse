import React from 'react'

const Navbar = () => {
  return (
    //justify between se links aur chapterverse opposite side chale jate h
    <div className='flex bg-[#F3F8F9] text-grey px-8 py-4 itmes-center justify-between'> 
        <div className='flex items-center '>
            <img className='h-10 me-4' src="https://www.svgrepo.com/show/53217/book-and-glasses.svg" alt="logo" />
            <h1 className='text-2xl font-semibold'>ChapterVerse</h1>
        </div>
        <div>Links</div>
    </div>

  )
}

export default Navbar


