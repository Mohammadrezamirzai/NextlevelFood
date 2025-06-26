import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div className={classes.heroContainer}>
          <div className={classes.hero}>
            <h1>Nextlevel Food For Nextlevel Foodies</h1>
            <p>Taste & share food from all over world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community" className={classes.ctaPrimary}>
              Join the Community
            </Link>
            <Link href="/meals" className={classes.ctaSecondary}>
              Explore Meals
            </Link>
          </div>
        </div>
      </header>

      <main className={classes.main}>
        <section className={classes.section}>
          <h2>How it works</h2>
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

          <div className={classes.steps}>
            <div className={classes.step}>
              <div className={classes.stepNumber}>1</div>
              <h3>Share Your Recipes</h3>
              <p>Upload your favorite family recipes, secret ingredients, and cooking tips with our global community.</p>
            </div>
            <div className={classes.step}>
              <div className={classes.stepNumber}>2</div>
              <h3>Discover New Cuisines</h3>
              <p>Explore thousands of recipes from around the world, from traditional dishes to modern fusion cuisine.</p>
            </div>
            <div className={classes.step}>
              <div className={classes.stepNumber}>3</div>
              <h3>Connect & Learn</h3>
              <p>Join cooking discussions, participate in live events, and learn from expert chefs and home cooks.</p>
            </div>
          </div>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
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

          <div className={classes.features}>
            <div className={classes.feature}>
              <div className={classes.featureIcon}>🌍</div>
              <h3>Global Community</h3>
              <p>Connect with food lovers from over 150 countries, sharing authentic recipes and cultural traditions.</p>
            </div>
            <div className={classes.feature}>
              <div className={classes.featureIcon}>👨‍🍳</div>
              <h3>Expert Guidance</h3>
              <p>Learn from professional chefs, food bloggers, and experienced home cooks through live events and tutorials.</p>
            </div>
            <div className={classes.feature}>
              <div className={classes.featureIcon}>📱</div>
              <h3>Easy Sharing</h3>
              <p>Share your recipes with beautiful photos, step-by-step instructions, and helpful cooking tips.</p>
            </div>
            <div className={classes.feature}>
              <div className={classes.featureIcon}>🎯</div>
              <h3>Personalized Experience</h3>
              <p>Discover recipes tailored to your taste preferences, dietary restrictions, and cooking skill level.</p>
            </div>
          </div>
        </section>

        <section className={classes.section}>
          <h2>Community Highlights</h2>
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
            <div className={classes.stat}>
              <span className={classes.statNumber}>1M+</span>
              <span className={classes.statLabel}>Cooking Sessions</span>
            </div>
          </div>
        </section>

        <section className={classes.section}>
          <h2>What Our Community Says</h2>
          <div className={classes.testimonials}>
            <div className={classes.testimonial}>
              <div className={classes.testimonialContent}>
                <p>"NextLevel Food has completely transformed my cooking! I've discovered amazing recipes from cultures I never knew existed."</p>
                <div className={classes.testimonialAuthor}>
                  <strong>Emma Rodriguez</strong>
                  <span>Home Chef, Mexico City</span>
                </div>
              </div>
            </div>
            <div className={classes.testimonial}>
              <div className={classes.testimonialContent}>
                <p>"The community here is incredible. Everyone is so supportive and I've learned techniques that have elevated my cooking skills."</p>
                <div className={classes.testimonialAuthor}>
                  <strong>David Kim</strong>
                  <span>Food Blogger, Seoul</span>
                </div>
              </div>
            </div>
            <div className={classes.testimonial}>
              <div className={classes.testimonialContent}>
                <p>"I love sharing my grandmother's traditional recipes and seeing how people from different cultures adapt them to their own tastes."</p>
                <div className={classes.testimonialAuthor}>
                  <strong>Fatima Al-Zahra</strong>
                  <span>Cultural Food Expert, Cairo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={classes.section}>
          <h2>Featured Recipe Categories</h2>
          <div className={classes.categories}>
            <div className={classes.category}>
              <div className={classes.categoryIcon}>🍕</div>
              <h3>Italian Cuisine</h3>
              <p>Authentic pasta, pizza, and traditional Italian dishes from family recipes passed down through generations.</p>
            </div>
            <div className={classes.category}>
              <div className={classes.categoryIcon}>🍜</div>
              <h3>Asian Delights</h3>
              <p>From spicy Thai curries to delicate Japanese sushi, explore the diverse flavors of Asian cuisine.</p>
            </div>
            <div className={classes.category}>
              <div className={classes.categoryIcon}>🌮</div>
              <h3>Latin American</h3>
              <p>Vibrant Mexican tacos, Brazilian feijoada, and Peruvian ceviche - taste the passion of Latin cooking.</p>
            </div>
            <div className={classes.category}>
              <div className={classes.categoryIcon}>🥘</div>
              <h3>Mediterranean</h3>
              <p>Fresh Greek salads, Spanish paella, and Moroccan tagines - healthy and flavorful Mediterranean dishes.</p>
            </div>
            <div className={classes.category}>
              <div className={classes.categoryIcon}>🍰</div>
              <h3>Sweet Treats</h3>
              <p>Decadent desserts, pastries, and sweet creations from around the world to satisfy your sweet tooth.</p>
            </div>
            <div className={classes.category}>
              <div className={classes.categoryIcon}>🥗</div>
              <h3>Healthy & Vegan</h3>
              <p>Nutritious plant-based meals, gluten-free options, and healthy alternatives for every dietary need.</p>
            </div>
          </div>
        </section>

        <section className={classes.section}>
          <h2>Join Our Growing Community</h2>
          <div className={classes.joinSection}>
            <div className={classes.joinContent}>
              <h3>Ready to Start Your Culinary Journey?</h3>
              <p>Join thousands of food enthusiasts who are already sharing, discovering, and creating amazing dishes together. Whether you're a seasoned chef or just starting your cooking adventure, there's a place for you in our community.</p>
              <div className={classes.joinBenefits}>
                <div className={classes.benefit}>
                  <span className={classes.benefitIcon}>✓</span>
                  <span>Free to join and share recipes</span>
                </div>
                <div className={classes.benefit}>
                  <span className={classes.benefitIcon}>✓</span>
                  <span>Access to exclusive cooking events</span>
                </div>
                <div className={classes.benefit}>
                  <span className={classes.benefitIcon}>✓</span>
                  <span>Connect with food lovers worldwide</span>
                </div>
                <div className={classes.benefit}>
                  <span className={classes.benefitIcon}>✓</span>
                  <span>Learn from expert chefs and home cooks</span>
                </div>
              </div>
            </div>
            <div className={classes.joinCta}>
              <Link href="/community" className={classes.ctaPrimary}>
                Join the Community
              </Link>
              <Link href="/meals" className={classes.ctaSecondary}>
                Browse Recipes
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
