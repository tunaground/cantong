export default function Thread({thread}) {
    return (
        <div>
            <div>
                <p>{thread.title}</p>
                <p>
                    <span>{thread.created_at}</span>
                    &nbsp;-&nbsp;
                    <span>{thread.updated_at}</span>
                </p>
            </div>
        </div>
    )
}