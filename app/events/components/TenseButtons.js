export default function TenseButtons({ futureOrPast, timeFrame }) {
  return (
    <div className="flex justify-center">
      <button
        onClick={() => futureOrPast("past")}
        className={`m-4 rounded-full p-2 border-4 border-citrus min-w-[150px] text-lg font-medium ${
          timeFrame === "past" ? "bg-citrus" : "bg-transparent"
        }`}
      >
        Past Events
      </button>
      <button
        onClick={() => futureOrPast("future")}
        className={`m-4 rounded-full p-2 border-4 border-citrus min-w-[150px] text-lg font-medium ${
          timeFrame === "future" ? "bg-citrus" : "bg-transparent"
        }`}
      >
        Future Events
      </button>
    </div>
  );
}
