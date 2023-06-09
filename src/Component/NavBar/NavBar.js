import React ,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './NavBar.css'
function NavBar() {
  const[show,setShow]=useState(false)
  const NavBarVisibility=()=>{
    if(window.scrollY>100){
      setShow(true)
    }else{
      setShow(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',NavBarVisibility)
    return()=>{
      window.removeEventListener('scroll',NavBarVisibility)
    }
  })
  return (
    <div className={`nav ${show && 'nav-black' }`}>
      <Link to='/'>
      <img className='nav-logo' src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo"/>
      </Link>
      <Link to='/Account'>
   <img className='nav-avatar' src="http://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Originals" />
   </Link>
    </div>
  )
}

export default NavBar
