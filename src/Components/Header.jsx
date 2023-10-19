import React from 'react'
import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
  } from "@material-tailwind/react";
  import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <Navbar
    variant="gradient"
    color="#111317"
    className=" w-[100%] fixed bg-[#111317] px-4 py-3"
    fullWidth={true}
  >

    
    <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
      <Typography
        as="a"
        href="#"
        variant="h6"
        className=" absolute left-0  cursor-pointer bg-[#323744] p-5"
      >
       <Link to={'/'}> MyMovieWatchlist</Link>
      </Typography>
      <div className="ml-auto flex gap-1 md:mr-4">
        <IconButton variant="text" color="white">
          <Cog6ToothIcon className="h-4 w-4" />
        </IconButton>
        <IconButton variant="text" color="white">
          <BellIcon className="h-4 w-4" />
        </IconButton>
      </div>
      <div className="relative flex w-full gap-2 md:w-max">
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
      </div>
    </div>
  </Navbar>
  )
}
