import React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { AddWatchlist } from "../services/allAPI";
export default function DialogDefault({item,toast,setIsLoading}) {
  const [open, setOpen] = React.useState(false);
  const [watchlist, setWatchlist] = useState({
    title:item.title,
    poster_path:item.poster_path,
    year:item.release_date.split("-")[0],
    overview:item.overview,
    vote_average:parseFloat(item.vote_average).toFixed(1)    ,
    id:item.id,
    status:"planToWatch"
  });

  const HandleWatchlist= async()=> {
setIsLoading(true)
// console.log(watchlist);
    try {
        const responce = await AddWatchlist(watchlist)

        if (responce.status >=200 && responce.status <=300) {

          setIsLoading(false)
            toast.success(`${item.title} added to watchlist!`)

                
                

                handleOpen();
        }else {
            toast.error(`${item.title} already in watchlist`)
            handleOpen();
        }
    } catch (error){}
  }
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
       <Button
                          onClick={handleOpen}
                          className="w-[100%] h-[100%] bg-[#000000a5]"
                          variant=""
                        >
                          <i
                            class="fa-solid fa-plus fa-2xl"
                            style={{ color: "#ffffff" }}
                          ></i>
                        </Button>
      <Dialog
                    className=" backdrop-blur-none "
                    open={open}
                    handler={handleOpen}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0.9, y: -100 },
                    }}
                  >
                    <DialogHeader>{item.title}</DialogHeader>

                    <DialogBody>
                      <div>
                        Release Year : {item.release_date.split("-")[0]}
                      </div>
                      <span className="text-[#ff4400] ">Overview : </span>
                      {item.overview}
                    </DialogBody>
                    <DialogFooter>
                      <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                      >
                        <span>Back</span>
                      </Button>
                      <Button
                        variant="gradient"
                        color="green"
                        onClick={HandleWatchlist}
                      >
                        <span>Add To Watchlist</span>
                      </Button>
                    </DialogFooter>
                  </Dialog>
                 
    </>
  );
}