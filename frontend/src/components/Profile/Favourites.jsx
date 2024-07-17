import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Bookcard from '../Bookcard/Bookcard';

const Favourites = () => {
  const [favouritebooks, setfavouritebooks] = useState() 
  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`,
  };
  useEffect(() => {
    const fetch = async ()=>{
      const response = await axios.get('http://localhost:1000/api/v1/get-favourite-books',{headers});
      setfavouritebooks(response.data.data)
    };
    fetch();
  }, [favouritebooks]);
  
  return (
    <div className='grid grid-cols-4 gap-4'>
      {!favouritebooks && <div className='text-4xl font-semibold text-[#086D8A]'>
      No Favourite Books
      </div>}
      {favouritebooks && favouritebooks.map((items,i)=>
      <div key={i}>
      <Bookcard data ={items}favourite={true}/> 
      </div>)}
    </div>
  )
}

export default Favourites