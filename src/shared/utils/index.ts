import { SortItems } from "shared/constants/todo";
import { TaskType } from "shared/types/todo";

export const sortTasks = (list: TaskType[]) => {
    return [...list].sort((a, b) => {
        if (a.id < b.id) {
            return -1;
        } else {
            return 1;
        }
    });
};

export const sortTasksByStatus = (list: TaskType[]) => {
    return [...list].sort((a, b) => {
        if (a.completed < b.completed) {
            return -1;
        } else {
            return 1;
        }
    });
};

export const sortTasksByName = (list: TaskType[]) => {
    return [...list].sort((a, b) => {
        const minLength = Math.min(a.title.length, b.title.length);
        for (let i = 0; i < minLength; i++) {
            if (a.title[i] < b.title[i]) {
                return -1;
            }
            if (a.title[i] > b.title[i]) {
                return 1;
            }
        }
        return 0;
    });
};

export const getTasksList = (sortTerm: SortItems | null, list: TaskType[]) => {
    switch (sortTerm) {
        case SortItems.NAME:
            return sortTasksByName(list);
        case SortItems.STATUS:
            return sortTasksByStatus(list);
        default:
            return sortTasks(list);
    }
};

export const getFilteredLest = (list: TaskType[], filterTerm: string) =>
    list.filter((e) => e.title.toLowerCase().includes(filterTerm.toLowerCase()));
