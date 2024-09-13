import { SetStateAction } from "react"
import { Button } from "./button"

interface ButtonEditProps {
    setEdit: (value: SetStateAction<boolean>) => void
    edit: boolean
    className?: string
}

export const ButtonEdit = ({
    setEdit,
    edit,
    className
}: ButtonEditProps) => {
    if (!edit) {
        return (
            <Button
                id="edit"
                className={`${className}  bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-center`}
                label="Edit"
                disabled={false}
                onClick={() => setEdit(!edit)}
            />
        )
    }
    
    return (
        <div className={`${className} flex items-center justify-stretch`}>
            <Button
                id="cancel"
                className={`w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded text-center`}
                label="Cancel"
                disabled={false}
                onClick={() => {
                    setEdit(!edit)
                }}
            />
            <Button
                id="save"
                className={`w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 ml-3 rounded text-center`}
                isSubmitButton={true}
                label="Save"
            />
        </div>
    )
}