import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
});

export default todosSlice.reducer;
