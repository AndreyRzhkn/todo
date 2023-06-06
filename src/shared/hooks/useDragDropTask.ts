//libs
import { useState } from "react";
// import { useDispatch } from "react-redux";
//store
import todo from "services/mobxStore";
// import { replaceTask } from "services/store/todo/todoSlice";
//types
import { TaskType } from "shared/types/todo";

const useDragDropTask = () => {
    // const dispatch = useDispatch()
    const [currentTask, setCurrentTask] = useState<TaskType | null>(null);

    const dragStartHandler = (e: any, task: TaskType) => {
        setCurrentTask(task);
    };

    const dragOverHandler = (e: any) => {
        e.preventDefault();
    };

    const dropHandler = (e: any, task: TaskType) => {
        e.preventDefault();
        currentTask && todo.replaceTask(task, currentTask);
        // currentTask && dispatch(replaceTask({ task1: task, task2: currentTask }));
    };

    return { dragStartHandler, dragOverHandler, dropHandler };
};

export default useDragDropTask;
