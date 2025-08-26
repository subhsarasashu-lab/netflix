import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice(
    {
        name: "user",
        initialState: {
            userName: "",
            userId: "",
           
        },
        reducers: {
            addUser: (state, action) => {
                console.log(action.payload.user.displayName);
                state.userName = action.payload.user.displayName;
                state.userId = action.payload.user.email;
                
            }
            
        }

    }
);

export const { addUser } = userSlice.actions;
export default userSlice.reducer;