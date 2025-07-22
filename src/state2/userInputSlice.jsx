import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:"",
}

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        addUsers:(state,action)=>{
            state.user += action.payload
            state.user = ""
        },
       
    }
})

export const userReducer = userSlice.reducer
export const {addUsers} = userSlice.actions