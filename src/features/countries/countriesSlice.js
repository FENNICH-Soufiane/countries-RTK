import { createSlice } from "@reduxjs/toolkit";
import {
  showAllCountries,
  searchByCode,
  searchByRegion,
} from "./countriesAction";

const initialState = {
  loading: false,
  countriesData: [],
  countrySearched: [],
  region: "",
  searchTerm: "",
  error: false,
  success: false,
  message: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
      state.message = "";
      state.countrySearched = [];
      state.region = "";
    },
    setRegion: (state, action) => {
      state.region = action.payload;
      console.log(action.payload); //ex africas || americas
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // showAllCountries
      .addCase(showAllCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        // console.log(action.payload);
        state.success = true;
      })
      .addCase(showAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countriesData = [];
      })
      // searchByCode
      .addCase(searchByCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByCode.fulfilled, (state, action) => {
        state.loading = false;
        state.countrySearched = action.payload;
        // console.log(action.payload)
        state.success = true;
      })
      .addCase(searchByCode.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countrySearched = [];
      })
      // searchByRegion
      .addCase(searchByRegion.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByRegion.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        // console.log(action.payload)
        state.success = true;
      })
      .addCase(searchByRegion.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countriesData = [];
      });
  },
});

export const { reset, setRegion, setSearchTerm } = countriesSlice.actions;

export default countriesSlice.reducer;
