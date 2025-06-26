import classes from "./testimonials.module.css";

export default function Testimonials({ testimonials }) {
  return (
    <div className={classes.testimonials}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={classes.testimonial}>
          <div className={classes.testimonialContent}>
            <p>"{testimonial.quote}"</p>
            <div className={classes.testimonialAuthor}>
              <strong>{testimonial.author}</strong>
              <span>{testimonial.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
