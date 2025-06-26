import classes from "./steps.module.css";

export default function Steps({ steps }) {
  return (
    <div className={classes.steps}>
      {steps.map((step, index) => (
        <div key={index} className={classes.step}>
          <div className={classes.stepNumber}>{index + 1}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );
}
