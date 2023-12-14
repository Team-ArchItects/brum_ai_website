export default function MoreLessButtons ({showLessEvents, showMoreEvents}) {
    return (
        <div className="flex justify-center mb-10">
            <button onClick={() => showLessEvents()} className="m-4 rounded-full p-2 border-4 border-citrus min-w-[150px] text-lg font-medium">Show 5 less</button>
            <button onClick={() => showMoreEvents()} className="m-4 rounded-full p-2 border-4 border-citrus min-w-[150px] text-lg font-medium">Show 5 more</button>
        </div>
    )
}