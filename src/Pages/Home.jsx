import React, { useState } from 'react'
import MovieCard from '../Components/MovieCard'
import Pagination from '../Components/Pagination'



export default function Home() {
  const [pagination,setPagination]=useState(1)

  
  return (
   <>
   
      <div className='p-5  pt-[120px]'><MovieCard  pagination={pagination} />
  
      
      
      
      
      </div>


      <div className=''><Pagination setPagination={setPagination}/></div>
   </>
  )
}
