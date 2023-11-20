import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstname: 'John',
    lastname: 'Smith',
    age: 30,
    single: true
  },
  reducers: {
    updateFirstname: (state, action) => {
      state.firstname = action.payload
    },
    updateLastname: (state, action) => {
      state.lastname = action.payload
    },
    updateAge: (state, action) => {
      state.age = action.payload
    },
    updateSingle: (state) => {
      state.single = !state.single
    }
  }
})

export const { updateFirstname, updateLastname, updateAge, updateSingle } = userSlice.actions

export default userSlice.reducer