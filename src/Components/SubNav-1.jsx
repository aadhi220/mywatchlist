import React from "react";
import { Button } from "@material-tailwind/react";
import { updateWatchlist } from "../services/allAPI";
import { useState } from "react";
export default function SubNav({ allMovies, baseUrl, status }) {
    
  const [watchlist, setWatchlist] = useState({ });

  const handleStatus= async(id,item)=> {
setWatchlist({
  title:item.title,
  poster_path:item.poster_path,
  year:item.year,
  overview:item.overview,
  vote_average:item.vote_average,
  id:item.id,
  status:"Watched"
})

const responce= await updateWatchlist(id,watchlist) 
  }
  return (
    <div className="grid justify-center grid-cols-2 xl:grid-cols-6 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4  ">
      {allMovies.length > 0 ? (
        allMovies?.map(
          (item, index) =>
            item.status === status && (
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

                    <div className="w-[100%]  h-[100%]   p-2 rounded-lg  hover:block  card-hover absolute top-[0%] left-[0%] hidden  z-10">
                      {" "}
                      <Button
                          onClick={()=>handleStatus(item.id,item)}
                          className="w-[100%] h-[100%] bg-[#000000a5]"
                          variant=""
                        >
                          <i
                            class="fa-solid fa-check  fa-2xl"
                            style={{ color: "#ffffff" }}
                          ></i> Watched?
                        </Button>
                    </div>
                  </div>
                  <div className="movie-name">{item.title}</div>
                  <div className="flex justify-between ">
                    <span>{item.year}</span>{" "}
                    <span>
                      <i
                        className="fa-solid fa-star fa-sm me-1"
                        style={{ color: "#c7cbd1" }}
                      ></i>
                      {item.vote_average}
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
  );
}
