'use client'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  courses:[]
}

export const cartSlice = createSlice({
  name:"mycart",
  initialState,
  reducers:{
    add:(state,action)=>{
      state.courses.push(action.payload);
    }
  }
})

export const { add } = cartSlice.actions;

export default cartSlice.reducer;