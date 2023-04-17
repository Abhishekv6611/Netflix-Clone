import { createContext, useContext,useEffect,useState } from "react";
import { auth } from "../firebase/firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged}from 'firebase/auth'
//import { updateCurrentUser } from "firebase/auth";

const AuthContexst=createContext()

export function AuthContextProvider({children}){
  const [user,setUser]=useState({})
  function signUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
  }
 function logIn(email,password){
    return signInWithEmailAndPassword(auth,email,password)
 }


  function logOut(){
    return signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })
    return()=>{
        unsubscribe()
    }
  })

    return(
        <AuthContexst.Provider value={{signUp,logIn,logOut,user}}>
            {children}
        </AuthContexst.Provider>
    )
}
export function UserAuth(){
    return useContext(AuthContexst)
}
