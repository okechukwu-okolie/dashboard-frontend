import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { increment,decrement,decrementByAmount,incrementByAmount } from "./state/CounterSlice"
import { useState } from "react"


const Counter =()=>{
    //accessing the global state useSelector()
    const count = useSelector((state)=>state.counter.count)

    //updating the global state using useDispatch()
    const dispatch = useDispatch()

    //create functions for adding and removing
    const adding = () =>{
        dispatch(increment())
    }
    const removing = () =>{
        dispatch(decrement())
    }

    //using usestate to interact with the input element
    const [amount, setAmount ] =useState(0)

    const handleChange = (e) =>{
        setAmount(e.target.value)
    }

    const addMany = () =>{dispatch(incrementByAmount(parseInt(amount)))}
    const removeMany = ()=>{dispatch(decrementByAmount(parseInt(amount)))}


    return(
        <div>
            <h1>Redux</h1>
            <h2>Count {count}</h2>
            <button className="p-2  border-red-600 mr-3" onClick={adding}>+</button>
            <button className="p-2  border-red-600 mr-3" onClick={removing}>-</button>
            <br />
            <input type="number" value={amount} onChange={handleChange} className="border-2"/>
            <button onClick={addMany} className="p-2  border-red-600 mr-3">+</button>
            <button onClick={removeMany} className="p-2  border-red-600 mr-3">-</button>
        </div>
    )
}
export default Counter
// const initialState = {
//     count: 0
// };
