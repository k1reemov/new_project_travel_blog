export default function Button(props: any) {
    const {
        name,
        className,
    } = props;

    return (
        <div>
            <button className={className}>{name}</button>
        </div>
    )
}