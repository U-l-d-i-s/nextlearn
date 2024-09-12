'use client'

import { ReadOnlyTaskList } from '@/components/task/readOnlyTaskList'
import { useAppContext } from './providers'

export default function Home() {
    const { tasksData, setTaskDetailsPage } = useAppContext()

    return (
        <>
            <ReadOnlyTaskList
                tasksData={tasksData}
                setTaskDetailsPage={setTaskDetailsPage}
            />
        </>
    )
}
