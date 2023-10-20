import React from 'react'
import { Card } from 'flowbite-react'
import { Link } from 'react-router-dom'
const MovieCard = ({one}) => {

     
  return (
            
    one.map((p) =>    <div className="max-w-sm" key={p.id}> 
    <Link to={`/movie/detail/${p.id}`}>
      <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={`https://image.tmdb.org/t/p/w500/${p.poster_path}`}
     >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
         {p.title}
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
         {p.overview.slice(0,140)}
        </p>
      </p>
      
    </Card>
    </Link>
      </div> )
  
   )
}

export default MovieCard