import React, { useState } from 'react'
import Header from './Header'
import { BG_URL } from '../Utils/constants'

const Login = () => {

    const[isSignInForm , setIsSignInForm] = useState(true);

    const toggleSignIn = ()=>{
        setIsSignInForm(!isSignInForm)
    }


  return (
    <div>
      <Header />
      <div className="absolute">
      <img className="h-screen object-cover md:h-auto md:object-contain" src={BG_URL} alt="BG" />
      </div>
      <form  className=" absolute w-[80%] md:w-3/12  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80" onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-bold text-2xl py-2 px-2">{isSignInForm === true ? "Sign In" :  "Sign Up" }</h1>
         {!isSignInForm && <input type="text" placeholder='Name' className="p-2 m-2 w-full  bg-gray-800 font-semibold rounded-sm" />} 
         {!isSignInForm && <input type="text" placeholder='Profession' className="p-2 m-2 w-full  bg-gray-800 font-semibold rounded-sm" />} 
          <input type="text" placeholder='Email Address' className="p-2 m-2 w-full  bg-gray-800 font-semibold rounded-sm" />
          <input type="password" placeholder='Password' className="p-2 m-2 w-full  bg-gray-800 font-semibold rounded-sm" />
          <button className="p-2 m-2 bg-red-700 w-full rounded-lg">{isSignInForm === true ? "Sign In" :  "Sign Up" }</button>
          <p className="p-1 m-1 font-thin cursor-pointer" onClick={toggleSignIn}>{isSignInForm  ? "New to Netflix? Sign up now." :  "Already Registered? Sign in." }</p>
      </form>
    </div>
  )
}

export default Login
