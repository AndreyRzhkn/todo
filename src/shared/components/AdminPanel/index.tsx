//libs
import { Button, Input, Select } from "antd";
import { Buttons, SortItems, sortOptions } from "shared/constants/todo";
//styles
import * as S from "./styled";

type Props = {
    completed: number;
    incomplete: number;
    filterTerm: string;
    setFilterTerm: (term: string) => void;
    setSortTerm: (term: SortItems) => void;
    setIsAddModalOpen: (arg: boolean) => void;
};

const AdminPanel = ({
    completed,
    incomplete,
    filterTerm,
    setFilterTerm,
    setSortTerm,
    setIsAddModalOpen,
}: Props) => {
    return (
        <S.Panel>
            <Button type='primary' onClick={() => setIsAddModalOpen(true)}>
                {Buttons.ADD_NEW_TASK}
            </Button>
            <S.Title>Completed: {completed}</S.Title>
            <S.Title>Incomplete: {incomplete}</S.Title>
            <Input
                placeholder='Find task'
                value={filterTerm}
                onChange={(e) => setFilterTerm(e.target.value)}
            />
            <Select placeholder='Sort by' options={sortOptions} onChange={setSortTerm} />
        </S.Panel>
    );
};

export default AdminPanel;
