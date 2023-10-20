import React from "react";
import { useState, useEffect } from "react";

export default function MovieCard(pagination) {
  const [allMovies, setAllMoives] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjQwMGRmMDdlZDE1YmFkOGYwNzY4OTljOGUxZjg0YyIsInN1YiI6IjY1MzE3MTc0OGQyMmZjMDE0ZDdjM2UyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jCiXkg1i1zsIquuaVFZRwNR0wQ_rVIyZLl-E9LOahAQ",
      },
    };

    fetch(
      `https://api.themoviedb.org/4/account/653171748d22fc014d7c3e22/movie/recommendations?page=${pagination.pagination}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setAllMoives(response.results);
      })
      .catch((err) => console.error(err));

    // console.log(pagination.pagination);
  };

  useEffect(() => {
    fetchData();
  }, [pagination]);

  return (
    <>
      <div className="grid justify-center grid-cols-2 xl:grid-cols-6 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4  ">
        {allMovies.length > 0 ? (
          allMovies?.map(
            (item, index) =>
              item.title && (
                <>
                  {" "}
                  <div
                    key={index}
                    className="card relative  w-[160px] sm:w-[220px] p-2 rounded-lg "
                  >
                    <div className="">
                      <img
                        src={`${baseUrl}/${item.poster_path}`}
                        alt=""
                        className="image w-[] sm:w-[]"
                      />

                      <div className="w-[300px] h-[500px] sm:[220px] p-2 rounded-lg bg-[#273245e1] hover:block  card-hover absolute top-[20%] left-[60%] hidden   z-10 text-white transition-all"> {item.overview}   </div>
                    </div>
                    <div className="movie-name">{item.title}</div>
                    <div className="flex justify-between ">
                      <span>{item.release_date.split("-")[0]}</span>{" "}
                      <span>
                        <i
                          className="fa-solid fa-star fa-sm me-1"
                          style={{ color: "#c7cbd1" }}
                        ></i>
                        {parseFloat(item.vote_average).toFixed(1)}
                      </span>{" "}
                    </div>
                  </div>{" "}
                </>
              )
          )
        ) : (
          <div>Api is loading</div>
        )}
      </div>
    </>
  );
}
