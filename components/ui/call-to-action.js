import Link from "next/link";
import classes from "./call-to-action.module.css";

export default function CallToAction({
  title,
  description,
  primaryCta,
  secondaryCta,
  primaryCtaHref,
  secondaryCtaHref,
  benefits = []
}) {
  return (
    <div className={classes.ctaSection}>
      <div className={classes.ctaContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        {benefits.length > 0 && (
          <div className={classes.benefits}>
            {benefits.map((benefit, index) => (
              <div key={index} className={classes.benefit}>
                <span className={classes.benefitIcon}>✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={classes.ctaButtons}>
        <Link href={primaryCtaHref} className={classes.ctaPrimary}>
          {primaryCta}
        </Link>
        <Link href={secondaryCtaHref} className={classes.ctaSecondary}>
          {secondaryCta}
        </Link>
      </div>
    </div>
  );
}
