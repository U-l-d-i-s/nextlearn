import { TaskDetails } from '@/components/task/taskDetails'

export default function Page({ params }: { params: { id: string } }) {

    return (
        <TaskDetails id={params.id} gap={true}/>
    )
}