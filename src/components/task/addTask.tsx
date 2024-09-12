'use client'

import { AddTaskType } from '@/types/tasks'
import { useForm, FieldValues } from 'react-hook-form'
import { ControlledInputField } from '../inputField/controlledInputField'
import { Button } from '../button/button'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

interface AddTaskProps {
    isModal: boolean
    addTask: (params: AddTaskType) => void
    router?: AppRouterInstance
}

export const AddTask = ({ isModal, addTask, router }: AddTaskProps) => {
    const { control, handleSubmit } = useForm<FieldValues>({})

    const onSubmit = handleSubmit((data) => {
        const { title, description } = data

        addTask({ title, description })
        if (!router) return

        if (isModal === true) {
            router.back()
        } else {
            router.push('/')
        }
    })

    return (
        <form
            key="addTaskForm"
            onSubmit={onSubmit}
            className="flex-column justify-items-end space-x-[2px] rounded-[4px]"
        >
            <ControlledInputField
                title="Task Title"
                name="title"
                control={control}
                placeholder="Title..."
                rules={{
                    required: {
                        value: true,
                        message: 'Add Title!',
                    },
                }}
            />
            <ControlledInputField
                title="Description"
                name="description"
                control={control}
                placeholder="Description..."
                rules={{
                    required: {
                        value: true,
                        message: 'Add Description!',
                    },
                }}
            />
            <Button
                id="save"
                className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 mt-5 rounded text-center"
                isSubmitButton={true}
                label="Save"
            />
        </form>
    )
}
