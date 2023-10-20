import React from "react";
import { useState, useEffect } from "react";



export default function MovieCard() {

  const [allMovies, setAllMoives] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjQwMGRmMDdlZDE1YmFkOGYwNzY4OTljOGUxZjg0YyIsInN1YiI6IjY1MzE3MTc0OGQyMmZjMDE0ZDdjM2UyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jCiXkg1i1zsIquuaVFZRwNR0wQ_rVIyZLl-E9LOahAQ'
      }
    };
    
    fetch('https://api.themoviedb.org/4/account/653171748d22fc014d7c3e22/movie/recommendations?page=1', options)
      .then(response => response.json())
      .then(response => {console.log(response) ; 
        setAllMoives(response.results);
      
      }  )
      .catch(err => console.error(err));
  
    
  
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <div className="grid grid-cols-6 gap-4 ">
      
        { allMovies.length>0? allMovies?.map((item,index) => (
          ( item.title && <div key={index} className="card   w-[220px] p-2 rounded-lg ">
            <img
              src={`${baseUrl}/${item.poster_path}`}
              alt=""
              className="image w-[200px]"
            />
            <div className="movie-name">{item.title}</div>
            <div>2023</div>
          </div>
        ))): <div>fdsf</div> }

        
  
    </div>

      
    </>
  );
}
