import { action } from "../action-type"

export const Fetchmovie = (movies) => { 
      return { 
         type : action.Fetch_movies,
         payload : movies
      }
}

export const Selectmovie = (movie) => { 
       
    return { 
         type : action.Select_movie ,
         payload : movie
    }
}