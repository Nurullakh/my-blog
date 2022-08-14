import API from '../../../api';
import {createAsyncThunk} from "@reduxjs/toolkit";
import { IFormData } from './types';

export const fetchSignUp = createAsyncThunk(
    'user/fetchSignUp',
    async (data: IFormData, thunkAPI) => {
        try {
            const response = await API.post('accounts:signUp', data)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Вохникла ошибка")
        }
    }
)