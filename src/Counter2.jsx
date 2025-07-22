import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
const Counter2 = () => {

    const count = useSelector((state)=>state.Counter2.count)
    const user = useSelector((state)=>state.userInput.user)
  return (
    <div>
        <h1>counter:{}</h1>
        
    </div>
  )
}

export default Counter2