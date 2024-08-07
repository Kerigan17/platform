import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
    login: string;
    password: string;
    loggedIn: boolean;
}

const initialState: AuthState = {
    login: "",
    password: "",
    loggedIn: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        checkTeacher(state){

        },
        updateLogin(state, action: PayloadAction<string>){
            state.login = action.payload;
        },
        updatePassword(state, action: PayloadAction<string>){
            state.password = action.payload;
        }
    }

})

export const {checkTeacher, updateLogin, updatePassword} = authSlice.actions;
export default authSlice.reducer;