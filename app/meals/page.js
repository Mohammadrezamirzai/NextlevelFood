import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeal, getMeals } from "@/lib/meals";



export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by community",
};

async function Meals(params) {
  console.log("fefef");
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals,created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recpie and cook it yourself. it is easy and fun.{" "}
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recepie</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
