import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getFromLocal = (key) => {
  const localData = localStorage.getItem(key);

  try {
    const parsedData = JSON.parse(localData)
    return parsedData || [];
  }
  catch (e) {
    return []
  }

}

const initialState = {
  movies: [],
  favorites: getFromLocal('favorites'),
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

export const getMoviesByQuery = createAsyncThunk('movie/getMoviesByQuery', async (q) => {
  try {
    const response = await fetch(`${`http://www.omdbapi.com/?s=${q}&apikey=df241cb3`}`, {
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

export const toggleFavorite = createAsyncThunk("movie/toggleFavorite", async (movie) => {
  return movie;
});



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
      .addCase(getMoviesByQuery.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getMoviesByQuery.fulfilled, (state, action) => {
        state.movies = action.payload
        state.loading = false;
        state.error = false;
      })
      .addCase(getMoviesByQuery.rejected, (state) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(toggleFavorite.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        const movie = action.payload;
        const isFavorite = state.favorites.some((m) => m.imdbID === movie.imdbID);

        if (isFavorite) {
          state.favorites = state.favorites.filter((m) => m.imdbID !== movie.imdbID);
        } else {
          state.favorites.push(movie);
        }

        state.loading = false;
        state.error = false;

        localStorage.setItem("favorites", JSON.stringify(state.favorites));

      })
      .addCase(toggleFavorite.rejected, (state) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
  }
})

export default movieSlice.reducer;