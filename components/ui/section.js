import classes from "./section.module.css";

export default function Section({ title, children, className = "" }) {
  return (
    <section className={`${classes.section} ${className}`}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
