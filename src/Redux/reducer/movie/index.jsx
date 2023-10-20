 import { action } from "../../action/action-type"

const initial = {
    movies : [],
    movie : {} ,
} 


 export const  reducerMovie = (state = initial , {type  , payload }) => { 
    switch (type) {  
         case action.Fetch_movies : return {...initial , movies : payload} 

         case action.Select_movie  :return {...initial , movie : payload}

         default : return state ;
      }
      
   
 }