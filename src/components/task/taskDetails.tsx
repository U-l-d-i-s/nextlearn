'use client'

import { ControlledInputField } from '@/components/inputField/controlledInputField'
import { useState } from 'react'
import { FieldValues, Control, useForm } from 'react-hook-form'
import { ButtonEdit } from '../button/buttonEdit'
import { ControlledTextArea } from '../inputField/controlledTextArea'
import { useAppContext } from '@/app/providers'

interface TaskDetailsProps {
    gap: boolean
    id: string
}

export const TaskDetails = ({
    gap,
    id
}: TaskDetailsProps) => {
    const { getTask } = useAppContext()
    const [edit, setEdit] = useState<boolean>(false)

    const task = getTask(id);

    const { control, handleSubmit } = useForm<FieldValues>({
        defaultValues: {
            createDate: task?.createdDate,
            description: task?.description,
            id: task?.id,
            title: task?.title,
        },
    })

    const onSubmit = handleSubmit((data) => {
        setEdit((edit) => !edit)
        console.log(data)
    })

    return (
        <form
            onSubmit={onSubmit}
            className={`inline-flex-col items-center justify-center rounded-[4px] ${gap ? 'pt-10 relative' : ''}`}
        >
            <ButtonEdit
                edit={edit}
                setEdit={setEdit}
                className={`absolute end-6 ${gap ? 'top-0' : 'top-6'} right-88 w-[30%]`}
            />

            <div className="flex-col items-center rounded-[4px] ">
                <ControlledInputField
                    title="Task Title"
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
                <div className="flex items-center rounded-[4px] ">
                    <ControlledInputField
                        title="ID"
                        name="id"
                        control={control}
                        disabled={true}
                    />
                    <ControlledInputField
                        title="Create Date"
                        name="createDate"
                        control={control}
                        disabled={true}
                    />
                </div>
            </div>

            <ControlledTextArea
                title="Task Description"
                name="description"
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: 'Add Description!',
                    },
                }}
                keyName="description"
                disabled={!edit}
                height="h-32"
            />
        </form>
    )
}
