'use client'

import { TaskHeader } from '@/components/task/taskHeader'
import { TaskList } from '@/components/task/taskList'
import { useAppContext } from '../providers'

export default function Page() {
    const { tasksData, setSelectedTasksHandler, setTaskDetailsPage } = useAppContext()

    return (
        <>
            <TaskHeader />
            <TaskList
                enableSelect={true}
                tasksData={tasksData}
                setSelectedTasksHandler={setSelectedTasksHandler}
                setTaskDetailsPage={setTaskDetailsPage}
            />
        </>
    )
}
