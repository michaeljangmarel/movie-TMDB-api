import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux';

// import Image from 'next/image';
const List = () => { 

   let popular = [];

   popular = useSelector((state) => state.movies.movies)

   
  return (
   <div className='container mt-5 mx-auto'>
     <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-3 gap-3">


      <MovieCard one={popular}/>
       
     </div>
   </div>
  )
}

export default List