type ButtonProps = {
    id: string
    label: string
    secondary?: boolean
    loading?: boolean
    disabled?: boolean
    onClick?: () => void
    isSubmitButton?: boolean
    testDataId?: string
    className?: string
}

export const Button = ({
    id,
    label,
    loading,
    disabled,
    onClick,
    isSubmitButton: isSubmit = false,
    testDataId,
    className,
}: ButtonProps) => (
    <button
        id={id}
        type={isSubmit ? 'submit' : 'button'}
        disabled={disabled}
        className={className}
        onClick={() => {
            if (!loading && onClick) onClick()
        }}
        test-dataid={testDataId}
    >
        {label}
    </button>
)
