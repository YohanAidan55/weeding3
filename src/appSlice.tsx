// src/visibilitySlice.js
import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: { showComponents: false },
    reducers: {
        show: (state) => {
            state.showComponents = true;
        },
    },
});

export const { show } = appSlice.actions;
export default appSlice.reducer;
