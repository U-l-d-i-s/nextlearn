'use client'

import { useAppContext } from '@/app/providers'
import { ButtonLink } from '../button/buttonLink'
import { Button } from '../button/button'

export const TaskHeader = () => {
    const { deleteTask } = useAppContext()

    return (
        <div className="flex justify-between items-center p-4 text-white w-fit ">
            <div className="flex space-x-4">
                <ButtonLink
                    href="/addTask"
                    label="Add"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    id="addTask"
                />
                <Button
                    onClick={() => deleteTask()}
                    label="Delete"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    id="deleteTask"
                />
            </div>
        </div>
    )
}
