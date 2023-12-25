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

const BASE_URL = `https://api.themoviedb.org/3`;
const api_key = '24f592bac1516766ed11a1b60eaa44db';

export const getWeeklyMovies = createAsyncThunk('movie/getWeeklyMovies', async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${api_key}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Error');
    }

    const responseData = await response.json();
    console.log(responseData)
    return responseData.results;
  } catch (error) {
    throw error;
  }
})

export const getAllMovies = createAsyncThunk('movie/getAllMovies', async () => {
  try {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${api_key}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Error');
    }

    const responseData = await response.json();
    return responseData.results;
  } catch (error) {
    throw error;
  }
})

export const getAllTvShows = createAsyncThunk('movie/getAllTvShows', async () => {
  try {
    const response = await fetch(`${BASE_URL}/discover/tv?api_key=${api_key}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Error');
    }

    const responseData = await response.json();
    return responseData.results;
  } catch (error) {
    throw error;
  }
})

export const getMoviesByQuery = createAsyncThunk('movie/getMoviesByQuery', async (q) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${api_key}&query=${q}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Error');
    }

    const responseData = await response.json();
    return responseData.results;
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
      .addCase(getWeeklyMovies.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getWeeklyMovies.fulfilled, (state, action) => {
        state.movies = action.payload
        state.loading = false;
        state.error = false;
      })
      .addCase(getWeeklyMovies.rejected, (state) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(getAllMovies.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.movies = action.payload
        state.loading = false;
        state.error = false;
      })
      .addCase(getAllMovies.rejected, (state) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(getAllTvShows.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllTvShows.fulfilled, (state, action) => {
        state.movies = action.payload
        state.loading = false;
        state.error = false;
      })
      .addCase(getAllTvShows.rejected, (state) => {
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
        const isFavorite = state.favorites.some((m) => m.id === movie.id);

        if (isFavorite) {
          state.favorites = state.favorites.filter((m) => m.id !== movie.id);
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