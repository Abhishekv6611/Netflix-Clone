import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../constance/constance'
import './Banner.css'
import axios from '../../axios'
function Banner() {
   const[movie,setMovie]= useState()

  useEffect(()=>{
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      
      setMovie(
         response.data.results[
            Math.floor(Math.random()*response.data.results.length )
         ]
         )
         return response;
     })
     
  },[])
  return (
  

    
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}} className='banner object-cover'>
        <div className='content'>
            <h1 className='title '>{movie?movie.title:null}</h1>
             <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
             </div>
             <p className='over'>Released : {movie?.release_date}</p>
             <h1 className='description'>{movie?movie.overview:null}
</h1>
        </div>
<div className="fade"></div>
    </div>
  
  )
}

export default Banner
