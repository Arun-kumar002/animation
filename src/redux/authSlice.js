import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getValue = createAsyncThunk('/get', async (user, { rejectWithValue }) => {
    try {
        console.log('im')
        const { data } = await axios.get('http://localhost:5000/users')

        return data
    } catch (error) {
        return rejectWithValue(null)
    }
})


const Slicers = createSlice({
    initialState: {
        data: [],
        name: "dev",
        
    },
    name: "authSlice",
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        }
    },
    extraReducers: {
        [getValue.fulfilled]: (state, action) => {
            state.data = action.payload
        }
    }
});

export default Slicers.reducer;

export let { setData } = Slicers.actions;
