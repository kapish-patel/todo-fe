import {configureStore} from '@reduxjs/toolkit';
import todosSlice from './slice/todoSlice';
import userSlice from './slice/userSlice';

const store = configureStore({
    reducer: {
        // Reducers
        todos: todosSlice,
        user: userSlice,
    }
});

export default store;