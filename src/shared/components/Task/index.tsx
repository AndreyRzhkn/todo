//libs
import { Button } from "antd";
// import { useDispatch } from "react-redux";
//store
import todo from "services/mobxStore";
// import { deleteTask, completeTask } from "services/store/todo/todoSlice";
//types
import { TaskType } from "shared/types/todo";
//constants
import { Buttons } from "shared/constants/todo";
//styles
import * as S from "./styled";

type Props = {
    task: TaskType;
    onDragStart: (e: any, task: TaskType) => void;
    onDragOver: (e: any) => void;
    onDrop: (e: any, task: TaskType) => void;
};

const Task = ({ task, onDragStart, onDragOver, onDrop }: Props) => {
    // const dispatch = useDispatch();

    const handleDelete = (id: number) => {
        todo.deleteTask(id);
        // dispatch(deleteTask({ id }));
    };

    const handleEdit = (id: number) => {
        todo.completeTask(id);
        // dispatch(completeTask({ id }));
    };

    return (
        <S.Container
            onDragStart={(e) => onDragStart(e, task)}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, task)}
            draggable={true}
        >
            <S.TaskWrapper>
                <S.ContentWrapper>
                    <S.Title done={task.completed}>{task.title}</S.Title>
                    <p>{task.description}</p>
                </S.ContentWrapper>
                <S.Actions>
                    <Button type='primary' onClick={() => handleEdit(task.id)}>
                        {task.completed ? Buttons.DONE : Buttons.COMPLETE}
                    </Button>

                    <Button type='primary' danger onClick={() => handleDelete(task.id)}>
                        {Buttons.DELETE}
                    </Button>
                </S.Actions>
            </S.TaskWrapper>
        </S.Container>
    );
};

export default Task;
