import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './components/CounterRedux/CounterReduxSlice'
import userReducer from './components/User/UserSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  }
})