'use client'

import { AddTask } from '@/components/task/addTask'
import { useAppContext } from '../providers'
import { useRouter } from 'next/navigation'

export default function Page() {
    const { addTask } = useAppContext()
    const router = useRouter()

    return <AddTask isModal={false} addTask={addTask} router={router}/>
}
