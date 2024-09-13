'use client'

import { useRouter } from 'next/navigation'
import { ButtonLink } from '../button/buttonLink'
import { Button } from '../button/button'

export const Header = () => {
    const router = useRouter()

    return (
        <div className="bg-gray-800">
            <Button
                onClick={() => router.push("/")}
                className={
                    'bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-3 rounded'
                }
                label={'Back'}
                id={'headerBackButton'}
            />
            <ButtonLink
                href={'/addTask'}
                label={'Add Task'}
                id={'addTaskRoute'}
                className={
                    'bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 m-3 rounded'
                }
            />
            <ButtonLink
                href={'/taskList'}
                label={'Task List'}
                id={'taskListRoute'}
                className={
                    'bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 m-3 rounded'
                }
            />
        </div>
    )
}
