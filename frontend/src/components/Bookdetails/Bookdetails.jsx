import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { GrLanguage } from 'react-icons/gr';
import { FaRupeeSign } from 'react-icons/fa';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';

const Bookdetails = () => {
  const { id } = useParams(); // get the book id from the URL
  const [book, setBook] = useState(null);

  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);
  const role= useSelector((state)=> state.auth.role);
  console.log(isLoggedIn);
  console.log(role);
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        console.log(id);
        const response = await axios.get(`http://localhost:1000/api/v1/get-book-by-id/${id}`);
        console.log(response)
        setBook(response.data.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  // if (!book) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
    {book && (<div className='px-4 py-4 bg-[#F3F8F9] flex md:flex-row flex-col gap-8'>
      <div className='relative bg-[#F3F8F9] p-4 lg:h-[88vh] h-[70vh] md:w-3/6 w-full flex items-center justify-center'>
        <img src={book.url} alt={book.title} className='lg:h-[70vh] h-[50vh]' />
        <button className='absolute top-4 right-4 bg-[#086D8A] rounded-full text-xl text-white p-3'>
          <FaHeart />
        </button>
      </div>
      <div className='p-4 w-full lg:w-3/6 bg-white'>
        <h1 className='text-4xl text-[#032B37] font-semibold'>{book.title}</h1>
        <p className="text-lg text-[#086D8A] mt-4 font-medium">by {book.author}</p>
        <p className='mt-8 text-[#032B37] text-3xl font-bold flex items-center'>
          <FaRupeeSign className='' /> {book.price}{" "}
        </p>
        <p className="mt-8 text-gray-600">{book.desc}</p>
        <p className='flex mt-4 items-center justify-start text-zinc-600'>
          <GrLanguage className="mr-1" />{book.language}
        </p>
        <div className='mt-4 flex flex-row gap-4'>
          <button className='bg-[#086D8A] rounded text-xl p-3 text-white flex items-center'>
            <FaShoppingCart className='mr-2' /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  )}
  {!book && 
   <div className='h-screen bg-[#F3F8F9] flex items-center justify-center'>
    <Loader/>
   </div>
  }
    </>
  );
};

export default Bookdetails;
