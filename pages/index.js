import Head from "next/head";
import Image from "next/image";
import SEO from "../components/SEO";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO
        data={{
          title: "Hanzla Tauqeer",
          description:
            "A passionate Full Stack Web Developer and Mobile App Developer.",
          image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
          url: "https://developer-portfolio-1hanzla100.vercel.app",
          keywords: [
            "Hanzla",
            "Hanzla Tauqeer",
            "@1hanzla100",
            "1hanzla100",
            "Portfolio",
            "Hanzla Portfolio ",
            "Hanzla Tauqeer Portfolio",
            "web developer",
            "full stack",
            "full stack web developer",
            "mobile app developer",
            "android developer",
            "django",
            "flask",
            "django rest framework",
            "nodejs ",
            "expressjs",
            "reactjs ",
            "contextapi",
            "redux",
            "flutter",
          ],
        }}
      />
    </div>
  );
}
