import { configureStore } from "@reduxjs/toolkit";
import mensajeSlice from "./Slice/mensajeSlice";

export const store = configureStore({
    reducer:{
        MensajSlice:mensajeSlice
    }
})