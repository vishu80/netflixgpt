import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice=createSlice({
    name:'gpt',
    initialState:{
        gptData:null,
        toggleGpt:false
    },

    reducers:{
        toggleGptSearchView:((state)=>{
            state.toggleGpt=!state.toggleGpt
        })
    }
})
export const {toggleGptSearchView}=GptSearchSlice.actions
export default GptSearchSlice.reducer