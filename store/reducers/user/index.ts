import { UserState } from './types'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  name: 'Jone',
  count: 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload
    },
  },
})

export default userSlice.reducer;