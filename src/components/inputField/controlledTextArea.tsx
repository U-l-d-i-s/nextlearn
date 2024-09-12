import { useController, ValidationRule } from 'react-hook-form'
import { ControlledInputProps } from './controlledInputField';

type TextAreaComponentProps = {
    title?: string;
    shouldShowRequiredLabel?: boolean;
    helpText?: string;
    required?: string | ValidationRule<boolean>;
    errorMessage?: string;
    className?: string
    keyName?:string
    height?: string
} & ControlledInputProps;

export const ControlledTextArea = ({
    name,
    control,
    rules,
    defaultValue = '',
    placeholder,
    disabled,
    className,
    height,
    keyName,
    title
}: TextAreaComponentProps) => {
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
        <div className={`relative ${height ? height : ''} mt-3 mb-3 w-[100%] p-1`}>
            {title ? <h2 className="absolute -top-4 left-0">{title}</h2> : null}
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                placeholder={placeholder}
                disabled={disabled}
                className={`${className ? className : ''} ${height} resize-none border w-[100%] pl-3 pt-2 rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
                key={keyName}
            />
            {error && (
                <span className="absolute text-red-500 text-sm">{error.message}</span>
            )}
        </div>
    )
}