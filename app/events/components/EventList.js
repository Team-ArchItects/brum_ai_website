import EventCard from "./EventCard";
import MoreLessButtons from "./MoreLessButtons";
import TenseButtons from "./TenseButtons";

const EventList = ({eventsList, showMoreEvents, showLessEvents, timeFrame, futureOrPast, eventsToShow}) => {

  function dataPicker() {
    const eventCardArray = [];
    if (eventsList !== null) {
      if (timeFrame === "future") {
        eventsList
          .filter((eventData) => {
            const d1 = new Date();
            const d2 = new Date(eventData.display_until_date);
            const decider = d1.getTime() < d2.getTime();
            return decider;
          })
          .map((eventData) => {
            eventCardArray.push(
              <EventCard
                key={eventData.id}
                eventData={eventData}
                timeFrame={timeFrame}
              />
            );
          });
      } else if (timeFrame === "past") {
        eventsList
          .filter((eventData) => {
            const d1 = new Date();
            const d2 = new Date(eventData.display_until_date);
            const decider = d1.getTime() > d2.getTime();
            return decider;
          })
          .toReversed()
          .map((eventData) => {
            eventCardArray.push(
              <EventCard
                key={eventData.id}
                eventData={eventData}
                timeFrame={timeFrame}
              />
            );
          });
      }
    }
    const visableEvents =
      eventCardArray.length === 0 ? (
        <h3 className="text-4xl text-black dark:text-white my-10">
          No events scheduled at the moment, please check back soon!
        </h3>
      ) : (
        eventCardArray.slice(0, eventsToShow)
      );
    return visableEvents;
  }

  return (
    <>
      <TenseButtons futureOrPast={futureOrPast} />
      {dataPicker()}
      <MoreLessButtons
        showLessEvents={showLessEvents}
        showMoreEvents={showMoreEvents}
        noMore={eventsToShow > dataPicker().length}
        noLess={eventsToShow === 5}
      />
    </>
  );
};

export default EventList;
