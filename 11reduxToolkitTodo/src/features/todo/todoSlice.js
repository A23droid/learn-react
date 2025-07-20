import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid generates unique ids, no need to use Date.now() or any id = 1, 2, 3, ...

const initialState = {
    todos: [{id: 1, text: "hello, world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState, // Created it above
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }

            state.todos.push(todo)
        }, // Two fixed props of every method in reducers
        // state => current state
        // action => data
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }

})

// Imp. to export again individually as they are used in components
export const {addTodo, removeTodo} = todoSlice.actions

// Export again for reducers
export default todoSlice.reducer