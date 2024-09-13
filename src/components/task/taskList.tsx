import { TasksType, SelectedTaskType, TaskType } from '@/types/tasks'
import { Task } from './task'
import { useAppContext } from '@/app/providers'

interface TaskListProps {
    enableSelect: boolean
}

export const TaskList = ({
    enableSelect,
}: TaskListProps) => {
    const { getTasks, setSelectedTasksHandler } = useAppContext()

    const tasks = getTasks()
    if (!tasks) {
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
            {tasks.map((task) => (
                <Task
                    enableSelect={enableSelect}
                    setSelectedTasksHandler={setSelectedTasksHandler}
                    title={task.title}
                    description={task.description}
                    createdDate={task.createdDate}
                    id={task.id}
                    key={task.id}
                />
            ))}
        </div>
    )
}
