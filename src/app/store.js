import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './feature/login/loginSlice'

export default configureStore({
  reducer: {
    login: loginReducer
  },
})