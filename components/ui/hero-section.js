import Link from "next/link";
import classes from "./hero-section.module.css";

export default function HeroSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  primaryCtaHref,
  secondaryCtaHref,
  children
}) {
  return (
    <header className={classes.header}>
      {children}
      <div className={classes.heroContainer}>
        <div className={classes.hero}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className={classes.cta}>
          <Link href={primaryCtaHref} className={classes.ctaPrimary}>
            {primaryCta}
          </Link>
          <Link href={secondaryCtaHref} className={classes.ctaSecondary}>
            {secondaryCta}
          </Link>
        </div>
      </div>
    </header>
  );
}
