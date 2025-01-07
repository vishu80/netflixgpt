import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUserDetails:((state,action)=>{
            return action.payload

        }),
        
        signOutUser:((state,action)=>{
            return null
        })
    }
})
export const {addUserDetails,signOutUser}=userSlice.actions
export default userSlice.reducer