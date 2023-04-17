import React ,{ useState} from 'react';
import { Link ,} from 'react-router-dom/cjs/react-router-dom'
import { UserAuth } from '../Component/contest/Authcontext'
import './signin.css'
//import { useNavigate } from 'react-router-dom';

const Signin = () => {
 
  const [email,setEmail]=useState('')
  const [password, setPassword] = useState('')
  const {user,signUp}=UserAuth()
  
  

  
  const handleSubmit=async (e)=>{
    e.preventDefault()
  
    try{
       await signUp(email,password)
         
      
    }catch(error){
    console.log(error);
    }
  }
  
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://i.ibb.co/vXqDmnh/background.jpg" alt="logo" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
           <div className='max-w-[320px] mx-auto py-16  '>
            <h1 className='text-3xl font-bold'>Sign In</h1>
             <form  onSubmit={handleSubmit}  className='w-full flex flex-col py-3'>
               <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email"placeholder='Email' autoComplete='email'/>
              <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" 
                   placeholder='Password'
                   autoComplete='current-password'
               />

           <button type='submit'  className='bg-red-600 py-3 my-6 rounded font-bold'>Sign up</button>
           
                 <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input className='mr-2' type="checkbox"  />Remember me
                    </p>
                  <p>Need Help?</p>
                 </div>
                  <p className='py-8'>
                    <span className='text-gray-600'>
                     New to Netflix?
                      </span>{''}
                      <Link>
                      Sign Up
                      </Link>
                  </p>
             </form>
           </div>
        </div>
      </div>
      </div>
    </>
  )
}
export default Signin   
