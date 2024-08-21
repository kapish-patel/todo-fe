import {configureStore} from '@reduxjs/toolkit';
import todosSlice from './slice/todoSlice';

const store = configureStore({
    reducer: {
        // Reducers
        todos: todosSlice.reducer,
    }
});

export default store;