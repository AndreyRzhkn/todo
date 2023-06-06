import type { RootState } from "services/store";
//types
import { TaskType } from "shared/types/todo";

export const getTodoList = (state: RootState): TaskType[] => state.todo.list;
