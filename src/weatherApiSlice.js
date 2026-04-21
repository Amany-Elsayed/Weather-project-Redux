import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weatherApi/fetchWeather",
  async () => {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=24.38&lon=46.43&appid=47a4b805d68d635f08bb5d4581e20e60",
    );

    const responseNumber = Math.round(response.data.main.temp - 272.15);
    const responseDescription = response.data.weather[0].description;
    const responseMin = Math.round(response.data.main.temp_min - 272.15);
    const responseMax = Math.round(response.data.main.temp_max - 272.15);
    const responseIcon = response.data.weather[0].icon;

    console.log(response);

    return {
      number: responseNumber,
      description: responseDescription,
      min: responseMin,
      max: responseMax,
      icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
    };
  },
);
const weatherApiSlice = createSlice({
  name: "weatherApi",
  initialState: {
    result: "empty",
    weather: {},
    isLoading: false,
  },
  reducers: {
    changeResult: (state) => {
      state.result = "changed";
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { changeResult } = weatherApiSlice.actions;
export default weatherApiSlice.reducer;
