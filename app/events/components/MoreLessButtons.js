export default function MoreLessButtons ({showLessEvents, showMoreEvents, noMore, noLess}) {
    return (
        <div className="flex justify-center mb-10">
            <button onClick={() => showLessEvents()} className="m-4 rounded-full p-2 border-4 border-citrus min-w-[150px] text-lg font-medium disabled:bg-zinc-500 disabled:cursor-not-allowed" disabled={noLess}>Show Less</button>
            <button onClick={() => showMoreEvents()} className="m-4 rounded-full p-2 border-4 border-citrus min-w-[150px] text-lg font-medium disabled:bg-zinc-500 disabled:cursor-not-allowed" disabled={noMore}>Show More</button>
        </div>
    )
}