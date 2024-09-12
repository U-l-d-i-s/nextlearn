'use client'

import { ControlledInputField } from '@/components/inputField/controlledInputField'
import { TaskType } from '@/types/tasks'
import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react'
import { FieldValues, Control } from 'react-hook-form'
import { ButtonEdit } from '../button/buttonEdit'
import { ControlledTextArea } from '../inputField/controlledTextArea'

interface TaskDetailsProps {
    taskDetails: TaskType | undefined
    edit: boolean
    setEdit: Dispatch<SetStateAction<boolean>>
    onSubmit: (e?: BaseSyntheticEvent) => Promise<void>
    control: Control<FieldValues, any>
    defaultValues?:
        | {
              [x: string]: any
          }
        | undefined
}

export const TaskDetails = ({
    edit,
    setEdit,
    onSubmit,
    control,
}: TaskDetailsProps) => {
    return (
        <form
            onSubmit={onSubmit}
            className="inline-flex-col items-center justify-center rounded-[4px]"
        >
            <ButtonEdit
                edit={edit}
                setEdit={setEdit}
                className="absolute end-6 top-6 right-88 w-[30%]"
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
                    required: true,
                    minLength: {
                        value: 1,
                        message: 'Add Description!',
                    },
                }}
                keyName="description"
                disabled={!edit}
                className=""
                height="h-32"
            />
        </form>
    )
}
