import fetch from "node-fetch";
const API_URL ="https://yts.am/api/v2/list_movies.json?"
export const getMovies = (limit, rating)=>{
  let REQUEST_URL = API_URL;
  if(limit > 0){
    REQUEST_URL += `limit=${limit}`;
  }
  if(rating > 0){
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  
  return fetch(`${REQUEST_URL}`)
  .then(res => res.json())
  .then(json => json.data.movies);
}

//
//
//
// export const getById = id => {
//   const filterMovies = movies.filter(movie=> id ===movie.id);
//   return filterMovies[0];
// }
//
// export const deleteMovie = (id) => {
//   const cleanedMovies = movies.filter(movie => {
//     if(movie.id !== id){
//       return true
//     }
//   })
//   console.log(cleanedMovies)
//   if(movies.length >= cleanedMovies.length){
//     movies = cleanedMovies;
//     console.log("A")
//     return true;
//   }else{
//     console.log("B")
//     return false;
//   }
// }
//
// export const getMovies = () => movies;
//
// export const addMovie = (name , score) =>{
//   const newMovie = {
//     id: `${movies.length+1}`,
//     name,
//     score
//   };
//   movies.push(newMovie);
//   return newMovie;
// }
