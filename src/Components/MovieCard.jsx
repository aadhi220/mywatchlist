import React from "react";
import { useState, useEffect } from "react";
import Modal from './Modal';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DefaultSpinner from "./Spinner";
export default function MovieCard(pagination) {
  const [allMovies, setAllMoives] = useState([]);
  const[isloading,setIsLoading]=useState(false)

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const fetchData = async () => {
    setIsLoading(true)
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
        setIsLoading(false)
      })
      .catch((err) => console.error(err));

    // console.log(pagination.pagination);
  };

  useEffect(() => {
    fetchData();
  }, [pagination]);

if(isloading===true){

  return (<div className="  h-[500px]" style={{display:'flex',justifyContent:"center",alignItems:'center'}}><DefaultSpinner/></div>)
}else
{
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
                    <div className=" overflow-hidden">
                      <img
                        src={`${baseUrl}/${item.poster_path}`}
                        alt=""
                        className="image hover:blur-lg w-[] sm:w-[]"
                      />

                      <div className="w-[100%]  h-[320px]   p-2 rounded-lg  hover:block  card-hover absolute top-[0%] left-[0%] hidden  z-10">
                        {" "}
                        <Modal item={item} setIsLoading={setIsLoading} toast={toast}/>
                      {" "}
                      </div>
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
          <div className="text-white ">High Load on Server..! Please wait a moment</div>
        )}
      </div>
      <ToastContainer theme="colored" autoClose={2000} />
    </>
  );
}
}
