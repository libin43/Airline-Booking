import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    firstName: null,
    email: null,
    role: null,
    accessToken: null,
    loggedIn: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.firstName = action.payload.firstName
            state.email = action.payload.email
            state.role = action.payload.role
            state.accessToken = action.payload.accessToken
            state.loggedIn = true
        },
        setAccessToken: (state, action) => {
            console.log(action.payload,'hai');
            
            state.accessToken = action.payload;
        },
        logoutUser: (state) => {
            state.firstName = null
            state.email = null
            state.role = null
            state.accessToken = null
            state.loggedIn = false
        }
    }
})

export const {setUser, setAccessToken} = userSlice.actions

export default userSlice.reducer