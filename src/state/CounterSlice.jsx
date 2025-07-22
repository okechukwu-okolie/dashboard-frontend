import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    count : 0
}

const counterSlice = createSlice({
    /*
    1. name:name of the slice
    2. initalState
    3.reducers
    */ 
    name:'counter',
    initialState,
    reducer:{
        increment:(state,action)=>{
            //action:(type:'',payload:'')=>{}
               // return {count:state.count + 1}
               // this is actualy a simplified vrsion of the code above, it works the same and is more  preferred
                state.count ++
        },
        decrement:(state,action)=>{
           // return {count:state.count - 1}
           state.count --
        },
        incrementByAmount:(state,action)=>{
            //the action holds two paremeters:type:'' and payload:''
           // state.count = state.count + action.payload //this is, assign stsate.count which is 0 the new value of 0 + action.payload, which is the value of the user input from the input tag in the counter component.
           state.count += action.payload
        },
        decrementByAmount:(state,action)=>{
            state.count -= action.payload
        }

    }//reducers are functions used to carry out particular actions
    
})

export const counterReducer = counterSlice.reducer
export const {increment,decrement,incrementByAmount,decrementByAmount} = counterSlice.actions
