import React, { useEffect } from "react";
import List from "./List";
import { api_key, now } from "../Api/MovieApi"; 
import { useDispatch } from "react-redux";
import { Fetchmovie } from "../Redux/action/movies";

const Home = () => { 

  const dispatch = useDispatch();
   
 
   const Getmovie  = async() => {        

    const res = await now.get(`/movie/now_playing?api_key=${api_key}`)

    dispatch(Fetchmovie(res.data.results))
 
    }
   
   useEffect(() => { 
      Getmovie()
   },[])
  return (
    <div>
      <List/>
    </div>
  );
};

export default Home;
