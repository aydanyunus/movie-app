import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    error: null,
    loading: false
}

const BASE_URL = `http://www.omdbapi.com/?s=Batman&apikey=df241cb3`;

export const getMovies = createAsyncThunk('movie/getMovies', async () => {
    try {
        const response = await fetch(`${BASE_URL}`, {
          method: 'GET',
        });
    
        if (!response.ok) {
          throw new Error('Error');
        }
    
        const responseData = await response.json();
        return responseData.Search;
      } catch (error) {
        throw error;
      } 
})


export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload
                state.loading = false;
                state.error = false;
            })
            .addCase(getMovies.rejected, (state) => {
                state.loading = false;
                state.error = action.error.message || null;
            })
    }
})

export default movieSlice.reducer;