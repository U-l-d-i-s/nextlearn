'use client'

import { TaskHeader } from '@/components/task/taskHeader'
import { TaskList } from '@/components/task/taskList'

export default function Page() {

    return (
        <>
            <TaskHeader />
            <TaskList
                enableSelect={true}
            />
        </>
    )
}
