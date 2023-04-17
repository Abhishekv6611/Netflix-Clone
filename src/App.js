import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Component/loging/Login'
import Netflixorg from './Netflixorg'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import signin from './pages/signin'
import Account from './pages/Account'
import { AuthContextProvider } from './Component/contest/Authcontext'

function App() {
  return(  
<AuthContextProvider>
    <BrowserRouter>
    <div>
      <Route path='/Net-flix' component={Netflixorg} />
      <Route  exact  path='/' component={Login}/>
     <Route path='/signin' component={signin}/>
     <Route  path='/account' component={Account} />
    </div>
      </BrowserRouter>
</AuthContextProvider>
    
    

  
  )
}

export default App
