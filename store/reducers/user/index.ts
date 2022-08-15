import { IUserState, Status } from './types'
import { createSlice } from "@reduxjs/toolkit";
import {fetchSignUp} from "./ActionUser";

const initialState: IUserState = {
  email: '',
  idToken: '',
  refreshToken: '',
  status: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSignUp.fulfilled.type]: (state, action) => {
      state.email = action.payload.email;
      state.idToken = action.payload.idToken;
      state.refreshToken = action.payload.refreshToken;
      state.status = Status.Success;
    },
    [fetchSignUp.pending.type]: (state) => {
      state.status = Status.Loading
    },
    [fetchSignUp.rejected.type]: (state) => {
      state.status = Status.Error
    },
  }
})

export default userSlice.reducer;