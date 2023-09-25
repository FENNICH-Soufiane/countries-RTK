import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Show all countries
export const showAllCountries = createAsyncThunk(
  "countries/showAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      return response.data;
      // console.log(response)
    } catch (error) {
      const message = (error.response && error.reponse.data) || error.message;

      // rejectWithValue sends the error message as a payload
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Search by cioc code
export const searchByCode = createAsyncThunk(
  "countries/searchByCode",
  async (code, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      const message = (error.response && error.response.data) || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Search by region
export const searchByRegion = createAsyncThunk(
  "countries/searchByRegion",
  async (region, thunkAPI) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
      console.log(response.data)
      return response.data

    } catch (error) {
      const message = (error.response && error.response.data) || error.message
      return thunkAPI.rejectWithValue(message)
    }
  }
);
