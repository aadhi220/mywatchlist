import React from 'react'
import MovieCard from '../Components/MovieCard'
import requests from '../requests'

export default function Home() {
  return (
    <div className='p-5  pt-[120px]'><MovieCard fetchUrl={requests.fetchTrending} />
   
    
    
    
    
    </div>
  )
}
