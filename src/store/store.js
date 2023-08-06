import { configureStore } from '@reduxjs/toolkit'
import controledSlice from './formcomponent/controledSlice'

export const store = configureStore({
  reducer: {
    controledForm: controledSlice
  },
})