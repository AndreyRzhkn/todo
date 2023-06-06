//libs
// import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
//components
import AdminPanel from "shared/components/AdminPanel";
import AddModal from "shared/components/Modals/AddModal";
import Task from "shared/components/Task";
//store
// import todo from "services/mobxStore";
// import { getTodoList } from "services/store/todo/todoSelectors";
//hooks
import useDragDropTask from "shared/hooks/useDragDropTask";
//utils
import { getFilteredLest, getTasksList } from "shared/utils";
//constants
import { SortItems } from "shared/constants/todo";
//types
import { TaskType } from "shared/types/todo";
//styles
import * as S from "./styled";

type Props = {
    todo: TaskType[];
};

const Todo = ({ todo }: Props) => {
    // const list = useSelector(getTodoList);

    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
    const [filterTerm, setFilterTerm] = useState<string>("");
    const [sortTerm, setSortTerm] = useState<SortItems | null>(null);

    const completed = useMemo(() => todo.filter((e) => e.completed), [todo]);
    const incomplete = useMemo(() => todo.filter((e) => !e.completed), [todo]);
    const filteredItems = useMemo(() => getFilteredLest(todo, filterTerm), [filterTerm, todo]);

    const { dragStartHandler, dragOverHandler, dropHandler } = useDragDropTask();

    return (
        <S.Container>
            <h1>Your todo list</h1>
            <AdminPanel
                completed={completed.length}
                incomplete={incomplete.length}
                filterTerm={filterTerm}
                setFilterTerm={setFilterTerm}
                setSortTerm={setSortTerm}
                setIsAddModalOpen={setIsAddModalOpen}
            />
            <S.List>
                {getTasksList(sortTerm, filteredItems).map((t) => (
                    <Task
                        onDragStart={dragStartHandler}
                        onDragOver={dragOverHandler}
                        onDrop={dropHandler}
                        key={t.id}
                        task={t}
                    />
                ))}
            </S.List>
            <AddModal isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} />
        </S.Container>
    );
};

export default Todo;
