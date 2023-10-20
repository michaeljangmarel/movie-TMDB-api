import axios from "axios";

 export const  api_key = '2f29c496b4b6e01d1eaf7d27785e2c05';


 export const  now = axios.create({ 
     baseURL : 'https://api.themoviedb.org/3'
 })