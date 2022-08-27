import axios from 'axios';

import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPostData } from '../../../types/createPost'

export const fetchCreatePost = createAsyncThunk(
    'post/fetchCreatePost',
    async (data: IPostData, thunkAPI) => {
        try {
            const response = await axios.post('https://ny-blog1-default-rtdb.europe-west1.firebasedatabase.app/posts.json', data)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Возникла ошибка при создании поста')
        }
    }
)
