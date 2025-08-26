import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice(
    {
        name: "user",
        initialState: {
            
            userId: "",
           fullName:"",
        },
        reducers: {
            addUser: (state, action) => {
                state.userId = action.payload.email;
                state.fullName = action.payload.name;
                  localStorage.setItem("userName", state.userId);
                  localStorage.setItem("fullName", state.fullName);
                
            }
            
        }

    }
);

export const { addUser } = userSlice.actions;
export default userSlice.reducer;