import React from "react";
import MovieCard2 from "../Components/MovieCard2";

import { useEffect, useState } from 'react';
export default function Watchlist() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
console.log(windowWidth);
  return (
    <>
      <div className="p-5  pt-[120px]">
        <MovieCard2 windowWidth={windowWidth} />
     
      </div>
    </>
  );
}
