'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../button/button'

interface ModalProps {
    children: string | JSX.Element | JSX.Element[]
}

export const Modal = ({ children }: ModalProps) => {
    const router = useRouter()

    return (
        <div className="fixed inset-0 inline-flex items-center justify-center bg-black bg-opacity-50 z-30 ">
            <div className="bg-white rounded-lg shadow-lg p-6 relative w-2/3 h-fit">
                <Button
                    id='modalClose'
                    label="Close"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 rounded"
                    onClick={() => {
                        router.back()
                    }}
                />
                {children}
            </div>
        </div>
    )
}
