import { createSlice } from "@reduxjs/toolkit";

const configReducer=createSlice({
    name:'preferredLanguage',
    initialState:{
        lang:'en'
    },
    reducers:{
        changeLanguage:((state,action)=>{
            state.lang=action.payload
        })
    }
})
export const {changeLanguage}=configReducer.actions
export default configReducer.reducer