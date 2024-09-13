type ReadOnlyFieldProps = {
    value: string
    className?: string
}

export const ReadOnlyField = ({
    value,
    className,
}: ReadOnlyFieldProps) => {
    return (
        <input
            readOnly
            value={value}
            className={`${className ? className : ''} border w-[100%] p-2 rounded`}
        />
    )
}
