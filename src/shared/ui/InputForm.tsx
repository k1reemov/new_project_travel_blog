import {FormInputType} from "@/src/types/types";
import styles from "./InputForm.module.css"

export default function InputForm(props: FormInputType) {
    const {
        className,
        id ,
        label,
        type,
        placeholder,
        value,
        required = false,
        onChange
    } = props

    return (
        <div className={`${styles.inputWrapper} ${className || ''}`.trim()}>
            <label className={styles.inputLabel} htmlFor={id}>
                <span
                    className={`${styles.inputLabelTitle} ${required ? styles.isRequired : ''}`.trim()}
                >
                    {label}
                </span>
            </label>
            <input
                className={styles.inputField}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}