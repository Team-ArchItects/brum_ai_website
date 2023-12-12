export default function TenseButtons ({futureOrPast}) {
    return (
        <div>
            <button onClick={() => futureOrPast("future")} className="m-2 rounded-full p-2 border-4 border-citrus min-w-[150px]">Future</button>
            <button onClick={() => futureOrPast("past")}>Past</button>
        </div>
    )
}