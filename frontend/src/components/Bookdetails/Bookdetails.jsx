import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Bookdetails = () => {
  const { id } = useParams(); // get the book id from the URL
  const [book, setBook] = useState(null);

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

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img src={book.url} alt={book.title} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-2/3 md:pl-16">
          <h1 className="text-3xl font-bold text-[#032B37]">{book.title}</h1>
          <p className="text-lg text-gray-700 mt-2">by {book.author}</p>
          <p className="text-lg text-[#086D8A] mt-4 font-bold">${book.price}</p>
          <p className="mt-4 text-gray-600">{book.description}</p>
          <button className="mt-8 px-6 py-2 bg-[#086D8A] text-white font-bold rounded-lg hover:bg-[#075A71]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookdetails;
