import { Modal } from '@/components/modal/modal'
import { TaskDetails } from '@/components/task/taskDetails'

interface PageParams {
    params: { id: string }
}

export default function Page({ params }: PageParams) {
    return (
        <Modal>
            <TaskDetails id={params.id} gap={false} />
        </Modal>
    )
}
