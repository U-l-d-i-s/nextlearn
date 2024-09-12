'use client'
import { useManageTasks } from '@/hooks/useManageTasks'
import { AddTaskType, SelectedTaskType, TasksType, TaskType } from '@/types/tasks'
import React, { createContext, useContext } from 'react'
import { taskJson } from '../taskData/taskJsonMock'

interface ProvidersProps {
    children: React.ReactNode | React.ReactNode[]
}

type ContextType = {
    tasksData: TasksType
    selectedTasks: SelectedTaskType[]
    addTask: ({ title, description }: AddTaskType) => void
    deleteTask: () => void
    setSelectedTasksHandler: (task: SelectedTaskType) => void
    setTaskDetailsPage: (taskDetails: TaskType) => void
    taskDetails: TaskType | undefined
}

const context = createContext<ContextType>({
    tasksData: taskJson,
    selectedTasks: [],
    addTask: () => {},
    deleteTask: () => {},
    setSelectedTasksHandler: () => {},
    setTaskDetailsPage: () => {},
    taskDetails: undefined
})
export const useAppContext = () => useContext(context)

export function Providers({ children }: ProvidersProps) {
    const {
        tasksData,
        selectedTasks,
        addTask,
        deleteTask,
        setSelectedTasksHandler,
        setTaskDetailsPage,
        taskDetails,
    } = useManageTasks()

    return (
        <context.Provider
            value={{
                tasksData,
                selectedTasks,
                addTask,
                deleteTask,
                setSelectedTasksHandler,
                setTaskDetailsPage,
                taskDetails,
            }}
        >
            {children}
        </context.Provider>
    )
}
