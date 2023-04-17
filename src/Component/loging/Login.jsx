import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Login = () => {
  return (
    <header className='showcase'>
     <div className="showcase-top">
      <img src="https://i.ibb.co/r5krrdz/logo.png" alt="logo" />
      <Link to='/signin' className='btn btn-rounded'>
        Sign In
      </Link>
     </div>
     <div className="showcase-content">
      <h1>Unlimited Movies ,Tv Shows and More</h1>
      <p>Watch Anywhere.Cancel Anytime</p>
      <Link to='/Net-flix' className='btn-header btn-xl'>
        Watch Free for 30 Days
        <i className='fas fa-chevron-right btn-icon'></i>
      </Link>
     </div>
    </header>
  )
}

export default Login





