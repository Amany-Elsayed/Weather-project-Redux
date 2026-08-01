import { configureStore } from '@reduxjs/toolkit'
import weatherApiReducer from '../weatherApiSlice'

export const store = configureStore({
    reducer: {
        weatherApi: weatherApiReducer
    }





    
})