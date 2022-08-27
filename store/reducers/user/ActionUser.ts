import API from '../../../api';
import {createAsyncThunk} from "@reduxjs/toolkit";
import { IFormData } from './types';
import { IFormData as IDataSignin } from '../../../types/signin';

import setCookie from '../../../helpers/setCookie'

export const fetchSignUp = createAsyncThunk(
    'user/fetchSignUp',
    async (data: IFormData, thunkAPI) => {
        try {
            const response = await API.post('accounts:signUp', data)
            setCookie('email', response.data.email)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Возникла ошибка")
        }
    }
)

export const fetchSignIn = createAsyncThunk(
    'user/fetchSignIn',
    async (data: IDataSignin, thunkAPI) => {
        try {
            const response = await API.post('accounts:signInWithPassword', data)
            setCookie('email', response.data.email)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Возникла ошибка")
        }
    }
)