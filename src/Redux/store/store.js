import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './feature/cart/cartslice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      mycart:CartReducer
    },
  })
}
