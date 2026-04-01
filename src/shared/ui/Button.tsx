import Link from 'next/link';
import styles from "@/src/shared/ui/Button.module.css";

interface ButtonProps {
    href?: string;
    name: string;
    variant?: 'default' | 'filled' | 'arrow' | 'link';
    typeButton?: 'button' | 'submit' | 'reset';
    className?: string;
}

export default function Button(props:ButtonProps) {
    const {
        href,
        name,
        variant='default',
        typeButton,
        className,
    } = props;

    let variantClass = styles.defaultButton;
    if (variant === 'filled') variantClass = styles.filledButton;
    if (variant === 'arrow') variantClass = styles.defaultButtonWithArrow;
    if (variant === 'link') variantClass = styles.linkButton;

    const combinedClassName = `${variantClass} ${className || ''}`.trim();

    if (href) {
        return (
            <Link
                href={href}
                className={combinedClassName}
            >
                {name}
            </Link>
        )
    }

    return (
        <button
            type={typeButton}
            className={combinedClassName}
        >
            {name}
        </button>
    )
}