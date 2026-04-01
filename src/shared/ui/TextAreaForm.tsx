"use client"

import React, { useRef, useEffect } from "react";
import styles from "./InputForm.module.css"

interface TextAreaFormType {
    className?: string
    id: string
    label: string
    placeholder?: string
    value: string
    required?: boolean
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    maxLength?: number
}

export default function TextAreaForm(props: TextAreaFormType) {
    const {
        className,
        id ,
        label,
        placeholder,
        value,
        required = false,
        onChange,
        maxLength,
    } = props

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            // Сначала сбрасываем высоту до auto, чтобы поле могло уменьшаться, если стереть текст
            textarea.style.height = "auto";
            // Затем задаем высоту равную реальной высоте скрытого текста (scrollHeight)
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustHeight();
    }, [value]);

    const currentLength = typeof value === 'string' ? value.length : 0;

    return (
        <div className={`${styles.inputWrapper} ${className || ''}`.trim()}>
            <label className={styles.inputLabel} htmlFor={id}>
                <span
                    className={`${styles.inputLabelTitle} ${required ? styles.isRequired : ''}`.trim()}
                >
                    {label}
                </span>
            </label>
            <textarea
                ref={textareaRef}
                className={styles.inputField}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                rows={4}
            />
            {maxLength && (
                <div className={styles.counter}>
                    {currentLength} / {maxLength}
                </div>
            )}
        </div>
    )
}