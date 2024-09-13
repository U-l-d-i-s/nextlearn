import { ReadOnlyTask } from './readOnlyTask'
import { useAppContext } from '@/app/providers'

export const ReadOnlyTaskList = () => {
    const { getTasks } = useAppContext()

    const tasksData = getTasks()
    if (!tasksData) {
        return <p>No Tasks Added...</p>
    }

    return (
        <div className="w-[100%]">
            <div className="border-b-2 grid grid-cols-[1fr_1fr_1fr_1fr] gap-2 pl-2">
                <div>
                    <h3>ID</h3>
                </div>
                <div>
                    <h3>Title</h3>
                </div>
                <div>
                    <h3>Description</h3>
                </div>
                <div>
                    <h3>Creation Date</h3>
                </div>
            </div>
            {tasksData.map((task) => (
                <ReadOnlyTask
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
