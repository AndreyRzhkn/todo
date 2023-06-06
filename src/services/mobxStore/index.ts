import { makeAutoObservable } from "mobx";
import { TaskType } from "shared/types/todo";

class Todo {
    list: TaskType[] = [];
    constructor() {
        makeAutoObservable(this);
    }

    addTask(task: TaskType) {
        this.list.push(task);
    }

    deleteTask(id: number) {
        this.list = this.list.filter((t) => t.id !== id);
    }
    completeTask(id: number) {
        this.list = this.list.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
    }
    replaceTask(task1: TaskType, task2: TaskType) {
        this.list = this.list.map((t) => {
            if (t.id === task1.id) {
                return { ...t, id: task2.id };
            }
            if (t.id === task2.id) {
                return { ...t, id: task1.id };
            }
            return t;
        });
    }
}

const todoList = new Todo();

export default todoList;
