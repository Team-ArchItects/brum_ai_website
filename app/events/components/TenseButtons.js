export default function TenseButtons ({futureOrPast}) {
    return (
        <div>
            <button onClick={() => futureOrPast("future")}>Future</button>
            <button onClick={() => futureOrPast("past")}>Past</button>
        </div>
    )
}