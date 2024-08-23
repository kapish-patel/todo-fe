import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getTodos = createAsyncThunk(
    'todos/getTodos', async (userId) => {
    const response = await fetch(`api/?userId=${userId}`);
    return response.json();
});

export const addTodo = createAsyncThunk(
    'todos/addTodo', async (todo) => {
    const response = await fetch('api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    return response.json();
});

export const updateTodo = createAsyncThunk(
    'todos/updateTodo', async (todo) => {
    const response = await fetch('api/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    return response.json();
});

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo', async (todo) => {
    const response = await fetch('api/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    return response.json();
});


const initialState = {
    category1: [],
    category2: [],
    category3: [],
    category4: [],
    category5: [],
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.fulfilled, (state, action) => {
                state.category1 = [];
                state.category2 = [];
                state.category3 = [];
                state.category4 = [];
                state.category5 = [];

                const todos = action.payload;
                // loop through the todos and categorize them
                todos.forEach(todo => {
                    if (todo.todobucketid === 0) {
                        state.category1.push(todo);
                    } else if (todo.todobucketid === 1) {
                        state.category2.push(todo);
                    } else if (todo.todobucketid === 2) {
                        state.category3.push(todo);
                    } else if (todo.todobucketid === 3) {
                        state.category4.push(todo);
                    } else if (todo.todobucketid === 4) {
                        state.category5.push(todo);
                    }
                });
            })

            .addCase(addTodo.fulfilled, (state, action) => {
                const todo = action.payload;
                if (todo.todobucketid === 0) {
                    state.category1.push(todo);
                } else if (todo.todobucketid === 1) {
                    state.category2.push(todo);
                } else if (todo.todobucketid === 2) {
                    state.category3.push(todo);
                } else if (todo.todobucketid === 3) {
                    state.category4.push(todo);
                } else if (todo.todobucketid === 4) {
                    state.category5.push(todo);
                }
            })

            .addCase(deleteTodo.fulfilled, (state, action) => {
                const id = action.payload.id;
                const todo = action.payload.data;
                if (todo.todobucketid === 0) {
                    state.category1 = state.category1.filter(t => t.id !== id);
                } else if (todo.todobucketid === 1) {
                    state.category2 = state.category2.filter(t => t.id !== id);
                } else if (todo.todobucketid === 2) {
                    state.category3 = state.category3.filter(t => t.id !== id);
                } else if (todo.todobucketid === 3) {
                    state.category4 = state.category4.filter(t => t.id !== id);
                } else if (todo.todobucketid === 4) {
                    state.category5 = state.category5.filter(t => t.id !== id);
                }
            })
   

    }
});

export default todosSlice.reducer;
