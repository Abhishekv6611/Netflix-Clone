import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../constance/constance'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'


function Rowpost(props) {
  const[state,setState]=useState([])
  const[urlId,setUrl]=useState('')
  useEffect(()=>{
axios.get(props.url).then(response=>{

  setState(response.data.results)
})
  },);
  const opts={
    height:'390',
    width:'100%',
    
    playerVars:{
      autoplay:1,
    },
  }
  const handleMovie=(id)=>{
    
     axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
     if(response.data.results.length!==0){
      setUrl(response.data.results[0])
     }else{
      console.log('not here bro!')
     }
     })
  }
  return (
    <div className='row'>
      <h1 className='font-bold text-2xl '>{props.title }</h1>
      <div className="posters">
    {state.map((obj)=>
           <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt={obj.name} />
           )}
         
       
      </div>
        {  urlId &&   <Youtube opts={opts} videoId={urlId.key}/>  }
    </div>
  )
}

export default Rowpost
