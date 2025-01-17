import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setValue } = inputSlice.actions

export default inputSlice.reducer