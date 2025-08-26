import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';


const Browse = () => {


  const state = useSelector((store) => store.user);



  return (
    <div>
      <h1>your user Id is : {localStorage.getItem("userName")}</h1>

      <h2>full name is : {localStorage.getItem("fullName")} </h2>
      <button  className='w-auto h-auto bg-gradient-to-t from-purple-700 text-bold font-serif rounded-md'
        onClick={() => localStorage.clear()}>Clear storage</button>
    </div>
  );
}

export default Browse;