// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import {appSlice} from "./appSlice.jsx";

export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
    },
});
