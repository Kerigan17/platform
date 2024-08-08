import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Teacher {
    id: number,
    name: string,
    login: string,
    password: string
}

interface AuthState {
    login: string;
    password: string;
    loggedIn: boolean;
    teacher: Teacher;
}

const initialState: AuthState = {
    login: "",
    password: "",
    loggedIn: false,
    teacher: {
        id: 0,
        name: '',
        login: '',
        password: ''
    }
}

export const submitTeacherAuth = createAsyncThunk(
    'auth/submitTeacherAuth',
    async ({ login, password }: { login: string; password: string }) => {
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to authenticate');
        }

        return response.json();
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateLogin(state, action: PayloadAction<string>){
            state.login = action.payload;
        },
        updatePassword(state, action: PayloadAction<string>){
            state.password = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(submitTeacherAuth.fulfilled, (state: AuthState, action) => {
                state.loggedIn = true
                state.teacher = action.payload as Teacher
                console.log(state.teacher)
            })
    },
})

export const {updateLogin, updatePassword} = authSlice.actions;
export default authSlice.reducer;