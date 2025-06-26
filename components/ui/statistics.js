import classes from "./statistics.module.css";

export default function Statistics({ stats }) {
  return (
    <div className={classes.stats}>
      {stats.map((stat, index) => (
        <div key={index} className={classes.stat}>
          <span className={classes.statNumber}>{stat.number}</span>
          <span className={classes.statLabel}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
