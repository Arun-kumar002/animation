import { createSlice } from "@reduxjs/toolkit";
let initial = {
  name: "arun",
  user: [],
};
const Slicers = createSlice({
  name: "Slicers",
  initialState: initial,
  reducers: {
    add: (state, action) => {
      state.name = "kumar";
    },
    get: (state, action) => {
      state.user = action.payload;
    },
    del: (state) => {
      state.name = "arun";
    },
  },
  extraReducers:{
    
  }
  
});

export default Slicers.reducer;
export let { add, get, del } = Slicers.actions;
