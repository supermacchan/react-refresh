import { createSlice } from '@reduxjs/toolkit';
import { operations } from './operations';

const initialState = {
  cats: [],
  isLoading: false,
  error: null,
  fact: null
};

export const rootSlice = createSlice({
  name: 'cats',
  initialState,
  extraReducers: {
    [operations.getAllCats.fulfilled](state, action) {
        state.error = null;
        state.isLoading = false;
        state.cats = action.payload;
    },
    [operations.getAllCats.pending](state, action) {
        state.isLoading = true;
    },
    [operations.getAllCats.rejected](state, action) {
        state.error = action.payload;
        state.isLoading = false;
    },

    [operations.getRandomFact.fulfilled](state, action) {
        state.fact = action.payload;
    },
    [operations.getRandomFact.pending](state, action) {
        state.isLoading = true;
    },
    [operations.getRandomFact.rejected](state, action) {
        state.error = action.payload;
        state.isLoading = false;
    },
  }
});

export const rootReducer = rootSlice.reducer;