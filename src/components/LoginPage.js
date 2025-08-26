import React from 'react'
import Header from './Header'
import { backgroundImg } from '../utils/mock'
import { useState } from 'react';

const LoginPage = () => {

  const [isSignInForm, setisSignInForm] = useState(true);
  function toggleSignInForm() {
    setisSignInForm(pr => !pr);
  }

  return (
    <div>
      <Header />
      <form className="bg-black text-white absolute opacity-85 p-5 rounded-md h-auto mx-auto top-48 right-0 left-0 w-4/12 ">
        <h1 className="mx-2">{isSignInForm ? "Sign Up" : "Sign In"}</h1>
        {!isSignInForm ?   <input
          type="text"
          placeholder="full name"
          className="p-2 m-2 bg-gray-600 w-11/12 text-white rounded-md"
        />:null}
        <input
          type="text"
          placeholder="Email"
          className="p-2 m-2 bg-gray-600 w-11/12 text-white rounded-md"
        />
        <input
          type="text"
          placeholder="password"
          className="p-2 m-2 bg-gray-600 w-11/12 text-white rounded-md"
        />
        <button className="m-2 bg-red-600 w-11/12 h-8 text-center rounded-md">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-white" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Already a user ? Sign In"
            : "New to Netflix ? Sign Up Now"}
        </p> 
      </form>
      <img src={backgroundImg} />
    </div>
  );
}

export default LoginPage