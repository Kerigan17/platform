import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LoginState {
    login: string;
    password: string;
    loggedIn: boolean;
}

const initialState: LoginState = {
    login: "",
    password: "",
    loggedIn: false
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login(state){

        },
        updateLogin(state, action: PayloadAction<string>){
            state.login = action.payload;
        },
        updatePassword(state, action: PayloadAction<string>){
            state.password = action.payload;
        }
    }

})

export const {login, updateLogin, updatePassword} = loginSlice.actions;
export default loginSlice.reducer;