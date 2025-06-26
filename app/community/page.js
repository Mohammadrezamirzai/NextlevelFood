import Image from 'next/image';
import Link from 'next/link';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join our vibrant community of food enthusiasts and share your culinary journey with the world!</p>
        <div className={classes.stats}>
          <div className={classes.stat}>
            <span className={classes.statNumber}>10,000+</span>
            <span className={classes.statLabel}>Active Members</span>
          </div>
          <div className={classes.stat}>
            <span className={classes.statNumber}>50,000+</span>
            <span className={classes.statLabel}>Recipes Shared</span>
          </div>
          <div className={classes.stat}>
            <span className={classes.statNumber}>150+</span>
            <span className={classes.statLabel}>Countries</span>
          </div>
        </div>
      </header>

      <main className={classes.main}>
        <section className={classes.section}>
          <h2>Community Perks</h2>
          <ul className={classes.perks}>
            <li>
              <Image src={mealIcon} alt="A delicious meal" />
              <div className={classes.perkContent}>
                <h3>Share & Discover Recipes</h3>
                <p>Upload your family recipes, discover new cuisines, and get inspired by thousands of dishes from around the world.</p>
              </div>
            </li>
            <li>
              <Image src={communityIcon} alt="A crowd of people, cooking" />
              <div className={classes.perkContent}>
                <h3>Connect with Food Lovers</h3>
                <p>Find new friends who share your passion for cooking, join cooking groups, and participate in lively discussions.</p>
              </div>
            </li>
            <li>
              <Image src={eventsIcon} alt="A crowd of people at a cooking event" />
              <div className={classes.perkContent}>
                <h3>Exclusive Events & Workshops</h3>
                <p>Attend virtual cooking classes, live demonstrations, and exclusive events with renowned chefs and food experts.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className={classes.section}>
          <h2>What Our Members Say</h2>
          <div className={classes.testimonials}>
            <div className={classes.testimonial}>
              <div className={classes.testimonialContent}>
                <p>"NextLevel Food has completely transformed my cooking! I've discovered so many amazing recipes and made friends from around the world."</p>
                <div className={classes.testimonialAuthor}>
                  <strong>Sarah Chen</strong>
                  <span>Home Chef, Toronto</span>
                </div>
              </div>
            </div>
            <div className={classes.testimonial}>
              <div className={classes.testimonialContent}>
                <p>"The community here is incredible. Everyone is so supportive and I've learned techniques I never knew existed!"</p>
                <div className={classes.testimonialAuthor}>
                  <strong>Marcus Rodriguez</strong>
                  <span>Food Blogger, Barcelona</span>
                </div>
              </div>
            </div>
            <div className={classes.testimonial}>
              <div className={classes.testimonialContent}>
                <p>"I love sharing my grandmother's traditional recipes and seeing how people from different cultures adapt them."</p>
                <div className={classes.testimonialAuthor}>
                  <strong>Priya Patel</strong>
                  <span>Cultural Food Expert, Mumbai</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={classes.section}>
          <h2>Upcoming Community Events</h2>
          <div className={classes.events}>
            <div className={classes.event}>
              <div className={classes.eventDate}>
                <span className={classes.day}>15</span>
                <span className={classes.month}>Dec</span>
              </div>
              <div className={classes.eventDetails}>
                <h3>Holiday Baking Masterclass</h3>
                <p>Join Chef Maria for a festive baking session featuring traditional holiday cookies and cakes from around the world.</p>
                <span className={classes.eventTime}>7:00 PM EST • Virtual Event</span>
              </div>
            </div>
            <div className={classes.event}>
              <div className={classes.eventDate}>
                <span className={classes.day}>22</span>
                <span className={classes.month}>Dec</span>
              </div>
              <div className={classes.eventDetails}>
                <h3>Global Cuisine Night</h3>
                <p>Cook along with community members as we explore authentic dishes from Italy, Japan, and Morocco.</p>
                <span className={classes.eventTime}>6:00 PM EST • Live Stream</span>
              </div>
            </div>
            <div className={classes.event}>
              <div className={classes.eventDate}>
                <span className={classes.day}>05</span>
                <span className={classes.month}>Jan</span>
              </div>
              <div className={classes.eventDetails}>
                <h3>New Year, New Recipes Challenge</h3>
                <p>Start the year fresh with our community cooking challenge featuring healthy and innovative recipes.</p>
                <span className={classes.eventTime}>All Day • Community Challenge</span>
              </div>
            </div>
          </div>
        </section>

        <section className={classes.section}>
          <h2>Community Guidelines</h2>
          <div className={classes.guidelines}>
            <div className={classes.guideline}>
              <h3>🤝 Be Respectful</h3>
              <p>Treat all members with kindness and respect. We celebrate diversity and welcome all cooking styles and traditions.</p>
            </div>
            <div className={classes.guideline}>
              <h3>🍳 Share Authentically</h3>
              <p>Share your own recipes or properly credit sources. We value original content and cultural authenticity.</p>
            </div>
            <div className={classes.guideline}>
              <h3>📸 Quality Content</h3>
              <p>Post clear photos and detailed instructions. Help others recreate your delicious dishes successfully.</p>
            </div>
            <div className={classes.guideline}>
              <h3>🌍 Embrace Diversity</h3>
              <p>Explore and appreciate cuisines from different cultures. Ask questions respectfully and learn from each other.</p>
            </div>
          </div>
        </section>

        <section className={classes.section}>
          <div className={classes.ctaSection}>
            <h2>Ready to Join Our Community?</h2>
            <p>Start sharing your culinary passion with thousands of food lovers worldwide!</p>
            <div className={classes.ctaButtons}>
              <Link href="/meals" className={classes.ctaPrimary}>
                Start Sharing Recipes
              </Link>
              <Link href="/meals" className={classes.ctaSecondary}>
                Explore Recipes
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
