'use client'

import { useAppContext } from '@/app/providers'
import { Modal } from '@/components/modal/modal'
import { AddTask } from '@/components/task/addTask'
import { useRouter } from 'next/navigation'

export default function Page() {
    const { addTask } = useAppContext()
    const router = useRouter()

    return (
        <Modal>
            <AddTask isModal={true} addTask={addTask} router={router} />
        </Modal>
    )
}
