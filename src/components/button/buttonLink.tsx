import Link from 'next/link'
import { Button } from './button'

interface ButtonDefaultProps {
    onClick?: () => void
    href: string
    className: string
    label: string
    id: string
}

export const ButtonLink = ({
    onClick,
    href,
    className,
    label,
    id,
}: ButtonDefaultProps) => {
    return (
        <Link href={href}>
            <Button
                onClick={onClick ? () => onClick() : () => null}
                isSubmitButton={false}
                className={className}
                label={label}
                id={id}
            />
        </Link>
    )
}
