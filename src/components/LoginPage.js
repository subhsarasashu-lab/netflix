import React, { useRef } from 'react'
import Header from './Header'
import { backgroundImg } from '../utils/mock'
import { useState } from 'react';
import { checkValidData, auth } from "../utils/validation.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const LoginPage = () => {
  const email = useRef();
  const password = useRef();

  const [errorMsg, setErrorMsg] = useState(null);
  const [isSignInForm, setisSignInForm] = useState(true);
  function toggleSignInForm() {
    setisSignInForm(pr => !pr);
  }
  const handleClick = () => {
    const userId = email.current.value;
    const pass = password.current.value;
    const error = checkValidData(userId, pass);
    setErrorMsg(error);
    if (error) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, userId, pass).then((userCredential) => { const user = userCredential.user }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
    else {
      signInWithEmailAndPassword(auth, userId, pass).then((userCredential) => { const user = userCredential.user; }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  }

  return (
    <div>
      <Header />
      <form onSubmit={(e)=>e.preventDefault()} className="bg-black text-white absolute opacity-85 p-5 rounded-md h-auto mx-auto top-48 right-0 left-0 w-4/12 ">
        <h1 className="mx-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm ?   <input
          type="text"
          placeholder="full name"
          className="p-2 m-2 bg-gray-600 w-11/12 text-white rounded-md"
        />:null}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 m-2 bg-gray-600 w-11/12 text-white rounded-md"
        />
        <input
          ref={password}
          type="text"
          placeholder="password"
          className="p-2 m-2 bg-gray-600 w-11/12 text-white rounded-md"
        />
        <p>{errorMsg}</p>

        <button onClick={handleClick} className="m-2 bg-red-600 w-11/12 h-8 text-center rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
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