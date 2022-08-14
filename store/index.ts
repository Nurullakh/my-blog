import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from './reducers/user'

const rootReducer = combineReducers({
  user,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']