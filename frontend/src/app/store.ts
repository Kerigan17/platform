import {configureStore} from '@reduxjs/toolkit'
import loginReducer from '../features/login/login.slice.ts'

export const store = configureStore({
    reducer: {
        login: loginReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.dispatch>;