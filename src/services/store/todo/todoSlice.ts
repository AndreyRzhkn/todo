//libs
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//types
import { TaskType } from "shared/types/todo";

interface todoState {
    list: TaskType[];
}

const initialState: todoState = {
    list: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, { payload }: PayloadAction<TaskType>) => {
            state.list = [...state.list, payload];
        },
        deleteTask: (state, { payload }: PayloadAction<{ id: number }>) => {
            state.list = state.list.filter((t) => t.id !== payload.id);
        },
        completeTask: (state, { payload }: PayloadAction<{ id: number }>) => {
            state.list = state.list.map((t) =>
                t.id === payload.id ? { ...t, completed: !t.completed } : t,
            );
        },
        replaceTask: (state, { payload }: PayloadAction<{ task1: TaskType; task2: TaskType }>) => {
            state.list = state.list.map((t) => {
                if (t.id === payload.task1.id) {
                    return { ...t, id: payload.task2.id };
                }
                if (t.id === payload.task2.id) {
                    return { ...t, id: payload.task1.id };
                }
                return t;
            });
        },
    },
});

export const { addTask, completeTask, deleteTask, replaceTask } = todoSlice.actions;

export default todoSlice.reducer;
