export default function EventCard ({eventData}) {
    return (
        <card>
            <h2>{`${eventData.event_name}`}</h2>
            <p>{`${eventData.event_date}`}</p>
            <p>{`${eventData.event_time}`}</p>
            <p>{`${eventData.event_description}`}</p>
        </card>
    )
}