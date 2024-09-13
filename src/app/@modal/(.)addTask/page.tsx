import { Modal } from '@/components/modal/modal'
import { AddTask } from '@/components/task/addTask'

export default function Page() {
    return (
        <Modal>
            <AddTask isModal={true} />
        </Modal>
    )
}
