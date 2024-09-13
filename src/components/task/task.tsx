'use Client'

import { SelectedTaskType, TaskFormType, TaskType } from '@/types/tasks'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { ControlledInputField } from '../inputField/controlledInputField'
import Link from 'next/link'

type TaskInterface = {
    id: string
    title: string
    description: string
    createdDate: string
}

type TaskProps = {
    setSelectedTasksHandler: (tasks: SelectedTaskType) => void
    enableSelect: boolean
} & TaskInterface

export const Task = ({
    title,
    description,
    createdDate,
    id,
    setSelectedTasksHandler,
    enableSelect,
}: TaskProps) => {
    const [checked, setChecked] = useState<boolean>(false)
    const [edit, setEdit] = useState<boolean>(false)

    const { control, handleSubmit } = useForm<FieldValues>({
        defaultValues: {
            createdDate,
            description,
            id,
            title,
        },
    })

    const selectHandler = () => {
        setChecked(!checked)
        setSelectedTasksHandler({ id })
    }

    const onSubmit = handleSubmit((data) => {
        setEdit((edit) => !edit)
    })

    return (
        <form
            key={id}
            onSubmit={onSubmit}
            className="relative flex items-center space-x-[2px] rounded-[4px] h-fit w-[100%]"
        >
            {enableSelect ? (
                <div className="flex items-center space-x-2 pr-3">
                    <input
                        type="checkbox"
                        id={id.toString()}
                        className="flex items-center justify-center w-5 h-5 border-2 border-gray-400 rounded-md cursor-pointer peer-checked:bg-blue-500 peer-checked:border-blue-500 ml-3"
                        onChange={() => {
                            selectHandler()
                        }}
                        key={id}
                    />
                </div>
            ) : null}

            <Link
                href={`/taskDetails/${id}`}
                className="absolute h-[100%]  left-10 right-0 z-10"
            />
            <ControlledInputField name="id" control={control} disabled={true} />
            <ControlledInputField
                name="title"
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: 'Add Title!',
                    },
                }}
                disabled={!edit}
            />
            <ControlledInputField
                name="description"
                control={control}
                rules={{
                    required: true,
                    minLength: {
                        value: 1,
                        message: 'Add Description!',
                    },
                }}
                disabled={!edit}
            />
            <ControlledInputField
                name="createdDate"
                control={control}
                disabled={true}
            />
        </form>
    )
}
