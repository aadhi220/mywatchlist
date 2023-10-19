import React from "react";
import { useState, useEffect } from "react";
import tmdbAxiosInstance from "../tmdbAxiosInstance";


export default function MovieCard({ fetchUrl }) {

  const [allMovies, setAllMoives] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const fetchData = async () => {
    const { data } = await tmdbAxiosInstance.get(fetchUrl);
  
    setAllMoives(data.results);
    
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <div className="grid grid-cols-6 gap-4 ">
      
        { allMovies.length>0? allMovies?.map((item,index) => (
          ( item.name && <div key={index} className="card   w-[220px] p-2 rounded-lg ">
            <img
              src={`${baseUrl}/${item.poster_path}`}
              alt=""
              className="image w-[200px]"
            />
            <div className="movie-name">{item.name}</div>
            <div>2023</div>
          </div>
        ))): <div>fdsf</div> }

        
  
    </div>

      
    </>
  );
}
