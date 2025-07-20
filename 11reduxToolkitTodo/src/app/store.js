// Single Source Of Truth

import { configureStore } from "@reduxjs/toolkit"; // Step 1
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
}) // Step 2