import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    count: 0
}

const counterSlice2 = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count++
        },
        decrement:(state,action)=>{
            state.count--
        },
        addIncrement:(state,action)=>{
            state.count += action.payload
        },
        removeIncrement:(state,action)=>{
            state.action += action.payload
        },
    }
})

export const counterReducer2 = counterSlice2.reducer
export const {increment,addIncrement,decrement,removeIncrement} = counterSlice2.actions