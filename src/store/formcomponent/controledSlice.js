import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
};

export const controledSlice = createSlice({
    name:"controled",
    initialState,
    reducers:{
        changevalue: (state)=>{
            state.value += 10
        }

    }
})
export const { changevalue } = controledSlice.actions

export default controledSlice.reducer
