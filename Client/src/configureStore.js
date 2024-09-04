import { configureStore } from '@reduxjs/toolkit'
import foodSlice from './store/foodSlice'
import UserSlice from './store/UserSlice';

const store = configureStore({
  reducer: {
    foods: foodSlice,
    user: UserSlice
  }
})

export default store;