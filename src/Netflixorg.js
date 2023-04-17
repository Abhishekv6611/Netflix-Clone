import React from 'react'
import { originals,actions, Comedy, Romance, Horror, documentry, trendings ,Toprrated ,Upcoming}from './urls'
import Rowpost from './Component/RowPost/Rowpost'
import Banner from './Component/Banner/Banner'
import NavBar from './Component/NavBar/NavBar'
function Netflixorg() {
  return (
    <div>
       
     <NavBar/>
       <Banner/>
       <Rowpost  url={originals} title='Netflix Originals' />
     <Rowpost url={Upcoming} title='UP Coming' />
     <Rowpost url={Toprrated} title='Top Rated' isSmall/>
      <Rowpost url={trendings} title='Trending' isSmall/>
     <Rowpost url={actions} title="Action" isSmall/>
     <Rowpost url={Horror} title="Horror" isSmall/>
     <Rowpost url={Romance} title="Romance" isSmall/>
     <Rowpost url={documentry} title="documentry" isSmall/>
     <Rowpost url={Comedy} title="comedy" isSmall/>
     
    </div>
  )
}

export default Netflixorg
