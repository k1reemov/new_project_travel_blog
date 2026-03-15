export default function Button(props) {
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