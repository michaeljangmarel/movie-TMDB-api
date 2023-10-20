import React, { useEffect } from "react";
import { Card , Spinner} from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import { api_key, now } from "../Api/MovieApi";
import { useDispatch, useSelector } from "react-redux";
import { Selectmovie } from "../Redux/action/movies";

const Detail = () => {

  const {id} = useParams();

  const dispatch = useDispatch();

   const oneMovie = async() => { 
     
    const res = await now.get(`/movie/${id}?api_key=${api_key}`)
    
    dispatch(Selectmovie(res.data))

    }

   useEffect(() => { 
     oneMovie()
   },[])
 
  

   let one = useSelector((state) =>state.movies.movie)

  
   return (
  
      <div className="container mx-auto w-90">
        <Link to="/">
          <span className="ms-3">
            <i class="fa-solid fa-arrow-left"></i> Back
          </span>
        </Link>
       {JSON.stringify(one) == '{}' ? (
      <div className="text-center mt-11">
           <Spinner
         aria-label="Extra large spinner example"
         size="xl"
       />
      </div>
       ) :  <div className="p-3">
       <Card
         imgAlt="Meaningful alt text for an image that is not purely decorative"
         imgSrc={`https://image.tmdb.org/t/p/w500/${one.poster_path}`}
       >
         <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           <p>{one.title}</p>
         </h5>
         <p className="font-normal text-gray-700 dark:text-gray-400">
           <p>
           {one.overview}
           </p>
         </p>
         <div className="">
      <span><h5><i class="fa-solid fa-star"></i>  {one.vote_average}</h5></span>
      <span><h5><i class="fa-solid fa-users"></i> {one.vote_count}</h5></span>
      <span><h5><i class="fa-regular fa-calendar-days"></i> {one.release_date}</h5></span>
      <span><h5><i class="fa-solid fa-earth-europe"></i> {one.production_countries[0].name}</h5></span>
   </div>
       </Card>
     </div>}
      </div>
    
  );
};

export default Detail;
