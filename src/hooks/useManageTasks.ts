import {
    AddTaskType,
    SelectedTaskType,
    TasksType,
    TaskType,
} from '@/types/tasks'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { taskJson } from '../taskData/taskJsonMock'

export const useManageTasks = () => {
    const [tasksData, setTaskData] = useState<TasksType>(taskJson)
    const [taskDetails, setTaskDetails] = useState<TaskType | undefined>()
    const [selectedTasks, setSelectedTasks] = useState<SelectedTaskType[]>([])

    const addTask = ({ title, description }: AddTaskType): void => {
        const id: string = uuidv4()
        const createdDate = Date.now().toString()
        console.log(title, description)
        const fullTask: TaskType = {
            id,
            title,
            description,
            createdDate,
        }
        setTaskData([...tasksData, fullTask])
    }
    const deleteTask = (): void => {
        setTaskData([
            ...tasksData.filter(
                (task) =>
                    !selectedTasks.some(
                        (selectedTask) => selectedTask.id === task.id
                    )
            ),
        ])
        setSelectedTasks([])
    }

    const editTask = (task: TaskType): void => {}

    const setSelectedTasksHandler = (task: SelectedTaskType): void => {
        const taskSelected = selectedTasks.some(
            (slectedTask) => slectedTask.id === task.id
        )

        if (taskSelected) {
            setSelectedTasks([
                ...selectedTasks.filter(
                    (selectedTask) => selectedTask.id !== task.id
                ),
            ])
        } else {
            setSelectedTasks([...selectedTasks, task])
        }
    }

    const setTaskDetailsPage = (taskDetails: TaskType) => {
        setTaskDetails(taskDetails)
    }

    return {
        setTaskDetailsPage,
        taskDetails,
        setSelectedTasksHandler,
        selectedTasks,
        addTask,
        tasksData,
        deleteTask,
        editTask,
    }
}
