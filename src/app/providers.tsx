'use client'
import { useManageTasks } from '@/hooks/useManageTasks'
import { AddTaskType, SelectedTaskType, TasksType, TaskType } from '@/types/tasks'
import React, { createContext, useContext } from 'react'

interface ProvidersProps {
    children: React.ReactNode | React.ReactNode[]
}

type ContextType = {
    selectedTasks: SelectedTaskType[]
    addTask: ({ title, description }: AddTaskType) => void
    deleteTask: () => void
    setSelectedTasksHandler: (task: SelectedTaskType) => void
    getTask: (id: string) => TaskType | undefined
    getTasks: () => TasksType | undefined
}

const context = createContext<ContextType>({
    selectedTasks: [],
    addTask: () => {},
    deleteTask: () => {},
    setSelectedTasksHandler: () => {},
    getTask: () => undefined,
    getTasks: () => undefined,
})
export const useAppContext = () => useContext(context)

export function Providers({ children }: ProvidersProps) {
    const {
        selectedTasks,
        addTask,
        deleteTask,
        setSelectedTasksHandler,
        getTask,
        getTasks,
    } = useManageTasks()

    return (
        <context.Provider
            value={{
                selectedTasks,
                addTask,
                deleteTask,
                setSelectedTasksHandler,
                getTask,
                getTasks,
            }}
        >
            {children}
        </context.Provider>
    )
}
