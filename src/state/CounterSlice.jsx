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
    reducers:{
        increment:(state,action)=>{
            //action:(type:'',payload:'')=>{}
               // return {count:state.count + 1}
               // this is actualy a simplified vrsion of the code above, it works the same and is more  preferred
                state.count ++
        },
        decrement:(state,action)=>{
           // return {count:state.count - 1}
           state.count --
        }
    }//reducers are functions used to carry out particular actions
    
})

export const counterReducer = counterSlice.reducer
export const {increment,decrement} = counterSlice.actions
