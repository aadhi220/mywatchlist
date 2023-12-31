import { Button } from "@material-tailwind/react";
import { deleteWatchlist, updateWatchlist } from "../services/allAPI";

import Mobile_modal from "./Moblie_modal";
import { toast } from "react-toastify";
import { useState } from "react";
import DefaultSpinner from "./Spinner";
export default function SubNav({ allMovies, baseUrl, status,setWatchlistUpdateResponce,windowWidth,errorMessage }) {
  // const[mobileViewActionStatus,setMobileViewActionStatus]=useState("")
  const[isloading,setIsLoading]=useState(false)

  // if(mobileViewActionStatus==="delete"){
  //   handleDelete();
  // }else if( mobileViewActionStatus==="watched"){
    
  // }
    
const handleDelete =async (id)=> {
  setIsLoading(true)
  await deleteWatchlist(id)
 
  setWatchlistUpdateResponce(id)
  setIsLoading(false)
}

  const handleStatus= async(item)=> {
    setIsLoading(true);
  let watchlist_update={}
    if(item.status==='planToWatch')
  {
     watchlist_update={
      title:item.title,
      poster_path:item.poster_path,
      year:item.year,
      overview:item.overview,
      vote_average:item.vote_average,
      id:item.id,
      status:"watched"
    }
  }else if(item.status==="watched")
  {
     watchlist_update={
      title:item.title,
      poster_path:item.poster_path,
      year:item.year,
      overview:item.overview,
      vote_average:item.vote_average,
      id:item.id,
      status:"favourite"
      


    }
    toast.success(`${item.title} added to favourites`)
  }
// console.log(watchlist_update);
const responce =await updateWatchlist(item.id,watchlist_update) ;
setIsLoading(false)
setWatchlistUpdateResponce(item.title+item.status)



  }

  if(isloading===true) {
return (
<div className="  h-[500px]" style={{display:'flex',justifyContent:"center",alignItems:'center'}}><DefaultSpinner/></div>
);

}else {
  return (
    <div className="grid justify-items-center grid-cols-2 xl:grid-cols-6 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4  ">
      {allMovies?.length > 0 ? (
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

             { windowWidth>500 &&

<div className="w-[100%]  h-[100%]   p-2 rounded-lg  hover:block  card-hover absolute top-[0%] left-[0%]  hidden z-10">
{" "}
{  item.status==="planToWatch" &&  <Button
    onClick={()=>handleStatus(item)}
    className="w-[100%] h-[85%] hover:scale-105 bg-[#000000a5]"
    variant=""
  >
    <i
      class="fa-solid fa-check  fa-2xl"
      style={{ color: "#ffffff" }}
    ></i> Watched?
  </Button >}

  {  item.status==="watched" &&  <Button
    onClick={()=>handleStatus(item)}
    className="w-[100%] h-[85%] hover:scale-105 bg-[#000000a5]"
    variant=""
  >
    <i
      class="fa-solid fa-check  fa-2xl"
      style={{ color: "#ffffff" }}
    ></i> Add to Favourite
  </Button>}

  <Button
    onClick={()=>handleDelete(item.id)}
    className="w-[100%] h-[10%]  bg-[#ff1111]"
    variant=""
  >
    <i
      class="fa-solid fa-check  fa-2xl"
      style={{ color: "red" }}
    ></i> Remove?
  </Button>

</div>  

             }

{ windowWidth<500 &&

<div className="w-[100%]  h-[100%]   p-2 rounded-lg  hover:block  card-hover absolute top-[0%] left-[0%]   z-10">

<Mobile_modal handleDelete={handleDelete} handleStatus={handleStatus} item={item}/>
</div>  

             }

             
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
     <>
         
          <div className="  h-[500px]  gap-4" style={{display:'flex',justifyContent:"center",alignItems:'center',flexDirection:'column'}}>{  errorMessage!=="The Watchlist is Empty"  &&  <DefaultSpinner/>}  <div className="text-white w-[100%] text-center bg-black rounded-lg ">{errorMessage}</div></div>
     </>
      )}
    </div>
  );
}
}