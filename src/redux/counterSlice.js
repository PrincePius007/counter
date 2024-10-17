import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: "counter",
  initialState:{
    value:0
  },
  reducers: {
    increament:(state)=>{
        state.value+=1
    },
    decreament:(state)=>{
        state.value-=1
    },
    reset:(state)=>{
        state.value=0
    },
    changeRange:(state,action)=>{
      state.value += action.payload
    }
// actions
  },
})
//actions are needed for components 
export const {increament,decreament,reset,changeRange}=counterSlice.actions

//reducer are needed for update state
export default counterSlice.reducer


