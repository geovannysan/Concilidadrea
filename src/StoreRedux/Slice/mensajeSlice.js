import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    parms: {
        colorhead: "#d63384",
        titel: "",
        body: "",
        icon: "",

    }
}
const MensajeSlice = createSlice({
    name: "mensaje",
    initialState,
    reducers: {
        addmesaje: (state, action) => {
            state.parms = { ...action.payload }
        }
    }
})

export const{addmesaje}= MensajeSlice.actions
export default MensajeSlice.reducer