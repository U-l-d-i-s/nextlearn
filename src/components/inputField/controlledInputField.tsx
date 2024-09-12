import { HTMLInputTypeAttribute } from 'react'
import {
    Control,
    FieldValues,
    useController,
    UseControllerProps,
    ValidationRule,
} from 'react-hook-form'

export type ControlledInputProps<TFieldValues extends FieldValues = FieldValues> = {
    title?: string
    link?: string
    placeholder?: string
    helpText?: string
    type?: HTMLInputTypeAttribute
    disabled?: boolean
    control: Control<TFieldValues>
    shouldShowRequiredLabel?: boolean
} & UseControllerProps<TFieldValues>

type InputComponentProps = {
    title?: string
    shouldShowRequiredLabel?: boolean
    helpText?: string
    required?: string | ValidationRule<boolean>
    errorMessage?: string
    className?: string
    keyName?: string
    height?: string
} & ControlledInputProps

export const ControlledInputField = ({
    name,
    control,
    rules,
    defaultValue = '',
    placeholder,
    type = 'text',
    disabled,
    className,
    height,
    keyName,
    title,
}: InputComponentProps) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
        defaultValue,
        disabled,
    })

    return (
        <div className={`relative ${height ? height : ''} mt-3 mb-3 w-[100%] h-fit flex-column justify`}>
            {title ? <h2 className="absolute bottom-10 left-0">{title}</h2> : null}
            <input
                title="hi"
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                placeholder={placeholder}
                disabled={disabled}
                className={`${className ? className : ''} ${height} border w-[100%] p-2 rounded  ${error ? 'border-red-500' : 'border-gray-300'}`}
                key={keyName}
            />
            {error && (
                <span className="absolute top-12 left-0 text-red-500 text-sm">
                    {error.message}
                </span>
            )}
        </div>
    )
}
