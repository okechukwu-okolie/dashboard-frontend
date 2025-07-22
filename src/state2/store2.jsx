import { counterReducer2 } from "./CounterSlice2";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userInputSlice";


const store = configureStore({
    reducer:({
        counter2:counterReducer2,
        userInput:userReducer,
    })
})