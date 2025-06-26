import HeroSection from '@/components/ui/hero-section';
import Section from '@/components/ui/section';
import FeaturesGrid from '@/components/ui/features-grid';
import Statistics from '@/components/ui/statistics';
import Testimonials from '@/components/ui/testimonials';
import CallToAction from '@/components/ui/call-to-action';
import EventsGrid from '@/components/ui/events-grid';
import {
  perks,
  stats,
  testimonials,
  events,
  guidelines,
  benefits
} from '@/components/data/communityData';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <HeroSection
        title={
          <>
            One shared passion: <span className={classes.highlight}>Food</span>
          </>
        }
        subtitle="Join our vibrant community of food enthusiasts and share your culinary journey with the world!"
        primaryCta="Join the Community"
        secondaryCta="Explore Meals"
        primaryCtaHref="/community"
        secondaryCtaHref="/meals"
      >
        <Statistics stats={stats} />
      </HeroSection>

      <main className={classes.main}>
        <Section title="Community Perks">
          <FeaturesGrid features={perks} />
        </Section>

        <Section title="What Our Members Say">
          <Testimonials testimonials={testimonials} />
        </Section>

        <Section title="Upcoming Community Events">
          <EventsGrid events={events} />
        </Section>

        <Section title="Community Guidelines">
          <FeaturesGrid features={guidelines} />
        </Section>

        <Section title="Ready to Join Our Community?">
          <CallToAction
            title="Start sharing your culinary passion with thousands of food lovers worldwide!"
            description=""
            primaryCta="Start Sharing Recipes"
            secondaryCta="Explore Recipes"
            primaryCtaHref="/meals"
            secondaryCtaHref="/meals"
            benefits={benefits}
          />
        </Section>
      </main>
    </>
  );
}
