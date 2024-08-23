import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const addUser = createAsyncThunk(
    'user/addUser', async (userDetails) => {
    const response = await fetch(`api/identity/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
    });
    return response.json();
});

export const userLogin = createAsyncThunk(
    'user/userLogin', async (userDetails) => {
    const response = await fetch(`api/identity/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
    });
    return response.json();
});

export const userUpdate = createAsyncThunk(
    'user/userUpdate', async (userDetails) => {
    const response = await fetch(`api/identity/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
    });
    return response.json();
});

const initialState = {
    userid: '',
    username: '',
    email: '',
    categories: [],
    isLoggedIn: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.fulfilled, (state, action) => {
                const data = action.payload.identity;
                state.userid = data.id;
                state.username = data.username;
                state.email = data.email;
                state.categories = data.categories;
                state.isLoggedIn = true;

            })

            .addCase(userUpdate.fulfilled, (state, action) => {
                const data = action.payload.identity;
                state.username = data.username;
                state.email = data.email;
                state.categories = data.categories;
            });
            
    }
});

export default userSlice.reducer;