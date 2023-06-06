export interface TaskType {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export type FormData = {
    title: string;
    description: string;
};
