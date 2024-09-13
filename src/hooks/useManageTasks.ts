import {
    AddTaskType,
    SelectedTaskType,
    TasksType,
    TaskType,
} from '@/types/tasks'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { taskJson } from '../taskData/taskJsonMock'

// Hook to manage Seleceted / Deleted / Added / Edited (TBD) tasks
export const useManageTasks = () => {
    const [tasksData, setTaskData] = useState<TasksType>(taskJson)
    const [selectedTasks, setSelectedTasks] = useState<SelectedTaskType[]>([])

    const addTask = ({ title, description }: AddTaskType): void => {
        const id: string = uuidv4()
        const createdDate = Date.now().toString()

        const fullTask: TaskType = {
            id,
            title,
            description,
            createdDate,
        }
        setTaskData([...tasksData, fullTask])
    }

    const getTask = (id: string): TaskType | undefined => {
        return tasksData.find(task => task.id === id)
    }

    const getTasks = ():TasksType => {
        return tasksData
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

    // needs to be finished
    const editTask = (task: TaskType): void => {}

    return {
        setSelectedTasksHandler,
        selectedTasks,
        addTask,
        tasksData,
        deleteTask,
        editTask,
        getTask,
        getTasks,
    }
}
