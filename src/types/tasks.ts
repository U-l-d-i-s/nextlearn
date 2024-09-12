import { V4Options } from "uuid";

export type TaskType = {
    id: string;
    title: string;
    description: string;
    createdDate: string;
}

export type TasksType = TaskType[];

export type SelectedTaskType = {
    id: string | null;
};

export type AddTaskType = {
    title: string;
    description: string;
}

export type TaskFormType = {
    id: string
    title: string
    description: string
    createDate: string
} 