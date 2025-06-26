import classes from "./events-grid.module.css";

export default function EventsGrid({ events }) {
  return (
    <div className={classes.events}>
      {events.map((event, index) => (
        <div key={index} className={classes.event}>
          <div className={classes.eventDate}>
            <span className={classes.day}>{event.date.day}</span>
            <span className={classes.month}>{event.date.month}</span>
          </div>
          <div className={classes.eventDetails}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <span className={classes.eventTime}>{event.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
