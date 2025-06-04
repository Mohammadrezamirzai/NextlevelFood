import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";
import logoImg from "@/assets/logo.png";
import MainHeaderBg from "./main-header-bg";
import NavLink from "./nav-link";

export default function MainHeader(params) {
  return (
    <>
      <MainHeaderBg />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="a palte with food on it" priority />
          Nextlevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
