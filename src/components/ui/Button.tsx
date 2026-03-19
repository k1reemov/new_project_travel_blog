import Link from 'next/link';

export default function Button(props: any) {
    const {
        page,
        name,
        className,
    } = props;

    return (
        <div>
            <Link href={`/${page}`} className={className}>{name}</Link>
        </div>
    )
}