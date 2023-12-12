export default function TenseButtons ({futureOrPast}) {
    return (
        <div className="flex justify-center mb-10">
            <button onClick={() => futureOrPast("future")} className="m-4 rounded-full p-2 border-4 border-citrus min-w-[150px] text-lg font-medium">Future Events</button>
            <button onClick={() => futureOrPast("past")} className="m-4 rounded-full p-2 border-4 border-citrus min-w-[150px] text-lg font-medium">Past Events</button>
        </div>
    )
}