'use client'

import { useForm, FieldValues } from 'react-hook-form'
import { ControlledInputField } from '../inputField/controlledInputField'
import { Button } from '../button/button'
import { useRouter } from 'next/navigation'
import { useAppContext } from '@/app/providers'
import { ControlledTextArea } from '../inputField/controlledTextArea'

interface AddTaskProps {
    isModal: boolean
}

export const AddTask = ({ isModal }: AddTaskProps) => {
    const { addTask } = useAppContext()
    const router = useRouter()
    const { control, handleSubmit } = useForm<FieldValues>({})

    const onSubmit = handleSubmit((data) => {
        const { title, description } = data

        addTask({ title, description })
        if (!router) return

        // Check if this is modal, then go to correct route
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
            className="flex flex-col rounded-[4px] h-[100%] "
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
            <ControlledTextArea
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
                height="h-32"
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
