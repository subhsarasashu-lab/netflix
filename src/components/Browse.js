import React from 'react'
import { useSelector } from 'react-redux'


const Browse = () => {
  const state = useSelector(state => state.user);
  console.log(state);
  return (
    <div>

this is browse page
    </div>
  )
}

export default Browse;