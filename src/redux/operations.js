import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'https://catfact.ninja/',
});

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': JSON.stringify(process.env.REACT_APP_API_KEY),
    },
    contentType: 'application/json',
};

// =========== fetch all breeds ============
const getAllCats = createAsyncThunk(
    'cats/fetchAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await instance.get('/breeds', options);;
            return data.data;
        } catch (error) {
            console.error(error);
        }
    }
)

// =========== fetch a fact ============
const getRandomFact = createAsyncThunk(
    'cats/fetchFact',
    async (_, thunkAPI) => {
        try {
            const { data } = await instance.get('/fact', options);
            return data.fact;
        } catch (error) {
            console.error(error);
        }
    }
)

export const operations = {
    getAllCats,
    getRandomFact
}