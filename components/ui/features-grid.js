import classes from "./features-grid.module.css";

export default function FeaturesGrid({ features }) {
  return (
    <div className={classes.features}>
      {features.map((feature, index) => (
        <div key={index} className={classes.feature}>
          <div className={classes.featureIcon}>{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
