import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './feature/cart/cartslice'
import CourseReducer from './feature/course/courseSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      mycart:CartReducer,
      fetchCourse:CourseReducer,
    },
  })
}
