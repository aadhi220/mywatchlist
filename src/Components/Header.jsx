import React from 'react'
import {
    Navbar,
    Typography,
  } from "@material-tailwind/react";

import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <Navbar
    variant="gradient"
    color="#111317"
    className=" w-[100%] z-20 fixed bg-[#111317]  p-0"
    fullWidth={true}
  >

    
    <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
      <Typography
      
      
        variant="h6"
        className="   cursor-pointer bg-[#323744] p-4"
      >
       <Link to={'/'}> MyMovieWatchlist</Link>
      </Typography>
      <div className="ml-auto flex gap-1 mr-[3rem] ">
      <ul className="my-2 flex  gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
       <Link to={'/'} className="flex text-white items-center hover:text-blue-500 transition-colors">
         
            Home
         
       </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
       <Link to={'/watchlist'} className="flex text-white items-center hover:text-blue-500 transition-colors">
         
            Watchlist
         
       </Link>
      </Typography>
   
    </ul>
      </div>
      {/* <div className="relative flex w-full gap-2 md:w-max">
        <Input
          type="search"
          color="white"
          label="Type here..."
          className="pr-20"
          containerProps={{
            className: "min-w-[288px]",
          }}
        />
        <Button
          size="sm"
          color="white"
          className="!absolute right-1 top-1 rounded"
        >
          Search
        </Button>
      </div> */}
    </div>
  </Navbar>
  )
}
