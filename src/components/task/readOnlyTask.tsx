'use Client'

import { TaskType } from '@/types/tasks'
import Link from 'next/link'
import { ReadOnlyField } from '../inputField/readOnlyField'

type ReadOnlyTask = {
    id: string
    title: string
    description: string
    createdDate: string
}

type ReadOnlyTaskProps = {
    setTaskDetailsPage: (taskDetails: TaskType) => void
} & ReadOnlyTask

export const ReadOnlyTask = ({
    title,
    description,
    createdDate,
    id,
    setTaskDetailsPage,
}: ReadOnlyTaskProps) => {

    return (
        <div
            key={id}
            className="relative flex items-center space-x-[2px] rounded-[4px] h-[50px] w-[100%]"
        >
            <Link
                href="/taskDetails"
                className="absolute h-[50px] w-[100%] left-10 z-10"
                onClick={() =>
                    setTaskDetailsPage({ title, description, createdDate, id })
                }
            />
            <ReadOnlyField value={id} />
            <ReadOnlyField value={title} />
            <ReadOnlyField value={description} />
            <ReadOnlyField value={createdDate} />
        </div>
    )
}
