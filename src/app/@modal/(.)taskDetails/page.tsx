'use client'

import { useAppContext } from '@/app/providers'
import { Modal } from '@/components/modal/modal'
import { TaskDetails } from '@/components/task/taskDetails'
import { useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form'

export default function Page() {
    const { taskDetails } = useAppContext()
    const [edit, setEdit] = useState<boolean>(false)

    const { control, handleSubmit } = useForm<FieldValues>({
        defaultValues: {
            createDate: taskDetails?.createdDate,
            description: taskDetails?.description,
            id: taskDetails?.id,
            title: taskDetails?.title,
        },
    })

    const onSubmit = handleSubmit((data) => {
        setEdit((edit) => !edit)
        console.log(data)
    })

    return (
        <Modal>
            <div className="inline-flex-column justify-items-end space-x-[2px] rounded-[4px]">
                <TaskDetails
                    control={control}
                    onSubmit={onSubmit}
                    edit={edit}
                    setEdit={setEdit}
                    taskDetails={taskDetails}
                />
            </div>
        </Modal>
    )
}
