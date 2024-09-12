'use client'

import { TasksType, SelectedTaskType, TaskType } from '@/types/tasks'
import { Task } from './task'

interface TaskListProps {
    enableSelect: boolean
    tasksData: TasksType
    setSelectedTasksHandler: (task: SelectedTaskType) => void
    setTaskDetailsPage: (taskDetails: TaskType) => void
}

export const TaskList = ({
    tasksData,
    setSelectedTasksHandler,
    setTaskDetailsPage,
    enableSelect,
}: TaskListProps) => {
    if (!tasksData.length) {
        return <p>No Tasks Added...</p>
    }   

    return (
        <div className="w-[100%]">
            <div className="border-b-2 grid grid-cols-[50px_1fr_1fr_1fr_1fr] gap-2">
                <div>
                    <h3>Select</h3>
                </div>
                <div>
                    <h3>ID</h3>
                </div>
                <div>
                    <h3>Title</h3>
                </div >
                <div>
                    <h3>Description</h3>
                </div>
                <div>
                    <h3>Creation Date</h3>
                </div>
            </div>
            {tasksData.map((task) => (
                <Task
                    enableSelect={enableSelect}
                    setSelectedTasksHandler={setSelectedTasksHandler}
                    title={task.title}
                    description={task.description}
                    createdDate={task.createdDate}
                    id={task.id}
                    key={task.id}
                    setTaskDetailsPage={setTaskDetailsPage}
                />
            ))}
        </div>
    )
}
