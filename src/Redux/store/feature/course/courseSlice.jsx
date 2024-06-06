import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    fetchcourses:[]
}

export const CourseSlice = createSlice({
    name:'fetchCourse',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.fetchcourses.push(action.payload);
        }
    }
})

export const {add} = CourseSlice.actions;

export default CourseSlice.reducer;