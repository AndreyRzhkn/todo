//libs
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Modal, Input } from "antd";
// import { useDispatch } from "react-redux";
//store
import todo from "services/mobxStore";
// import { addTask } from "services/store/todo/todoSlice";
//validation
import { schema } from "./validation";
//constants
import { Buttons } from "shared/constants/todo";
import { defaultValues } from "./constants";
//types
import { FormData } from "shared/types/todo";
//styles
import * as S from "./styled";

type Props = {
    isAddModalOpen: boolean;
    setIsAddModalOpen: (value: React.SetStateAction<boolean>) => void;
};

const AddModal = ({ isAddModalOpen, setIsAddModalOpen }: Props) => {
    // const dispatch = useDispatch();

    const { control, setValue, handleSubmit, reset } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        const date = Date.now();
        const newTodo = {
            id: date,
            title: data.title,
            description: data.description,
            completed: false,
        };

        todo.addTask(newTodo);
        // dispatch(addTask(newTodo));
        setIsAddModalOpen(false);
        reset();
    };

    return (
        <Modal
            open={isAddModalOpen}
            footer={false}
            onCancel={() => setIsAddModalOpen(false)}
            maskClosable={false}
        >
            <S.Content>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name='title'
                        control={control}
                        render={({ field, fieldState }) => (
                            <>
                                <Input
                                    placeholder='Title'
                                    value={field.value}
                                    onChange={(value) => {
                                        setValue("title", value.currentTarget.value);
                                    }}
                                />
                                <S.Error>{fieldState.error?.message}</S.Error>
                            </>
                        )}
                    />
                    <Controller
                        name='description'
                        control={control}
                        render={({ field, fieldState }) => (
                            <>
                                <Input.TextArea
                                    placeholder='Description'
                                    value={field.value}
                                    onChange={(value) => {
                                        setValue("description", value.currentTarget.value);
                                    }}
                                />
                                <S.Error>{fieldState.error?.message}</S.Error>
                            </>
                        )}
                    />

                    <S.ActionsWrapper>
                        <Button onClick={() => setIsAddModalOpen(false)}>{Buttons.CANCEL}</Button>

                        <Button type='primary' htmlType='submit'>
                            {Buttons.ADD}
                        </Button>
                    </S.ActionsWrapper>
                </S.Form>
            </S.Content>
        </Modal>
    );
};

export default AddModal;
