import ImageSlideshow from "@/components/images/image-slideshow";
import HeroSection from "@/components/ui/hero-section";
import Section from "@/components/ui/section";
import Steps from "@/components/ui/steps";
import FeaturesGrid from "@/components/ui/features-grid";
import Statistics from "@/components/ui/statistics";
import Testimonials from "@/components/ui/testimonials";
import CallToAction from "@/components/ui/call-to-action";
import {
  steps,
  features,
  stats,
  testimonials,
  categories,
  benefits
} from "@/components/data/homepageData";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <HeroSection
        title="Nextlevel Food For Nextlevel Foodies"
        subtitle="Taste & share food from all over world."
        primaryCta="Join the Community"
        secondaryCta="Explore Meals"
        primaryCtaHref="/community"
        secondaryCtaHref="/meals"
      >
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
      </HeroSection>

      <main className={classes.main}>
        <Section title="How it works">
          <div className={classes.content}>
            <p>
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes,
              and to connect with other food lovers.
            </p>
            <p>
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </div>
          <Steps steps={steps} />
        </Section>

        <Section title="Why NextLevel Food?">
          <div className={classes.content}>
            <p>
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes,
              and to connect with other food lovers.
            </p>
            <p>
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </div>
          <FeaturesGrid features={features} />
        </Section>

        <Section title="Community Highlights">
          <Statistics stats={stats} />
        </Section>

        <Section title="What Our Community Says">
          <Testimonials testimonials={testimonials} />
        </Section>

        <Section title="Featured Recipe Categories">
          <FeaturesGrid features={categories} />
        </Section>

        <Section title="Join Our Growing Community">
          <CallToAction
            title="Ready to Start Your Culinary Journey?"
            description="Join thousands of food enthusiasts who are already sharing, discovering, and creating amazing dishes together. Whether you're a seasoned chef or just starting your cooking adventure, there's a place for you in our community."
            primaryCta="Join the Community"
            secondaryCta="Browse Recipes"
            primaryCtaHref="/community"
            secondaryCtaHref="/meals"
            benefits={benefits}
          />
        </Section>
      </main>
    </>
  );
}
