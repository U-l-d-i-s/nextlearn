import Link from 'next/link'
import { ReadOnlyField } from '../inputField/readOnlyField'

type ReadOnlyTaskProps = {
    id: string
    title: string
    description: string
    createdDate: string
}

export const ReadOnlyTask = ({
    title,
    description,
    createdDate,
    id,
}: ReadOnlyTaskProps) => {

    return (
        <div
            key={id}
            className="relative flex items-center space-x-[2px] rounded-[4px] h-[50px] w-[100%]"
        >
            <Link
                href={`/taskDetails/${id}`}
                className="absolute h-[50px] w-[100%] left-10 z-10"
            />
            <ReadOnlyField value={id} />
            <ReadOnlyField value={title} />
            <ReadOnlyField value={description} />
            <ReadOnlyField value={createdDate} />
        </div>
    )
}
