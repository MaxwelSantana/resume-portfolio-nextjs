import dynamic from "next/dynamic";
import SEO from "../components/SEO";
const Navigation = dynamic(() => import("../components/Navigation"));

export default function Home() {
  return (
    <div>
      <SEO
        data={{
          title: "Hanzla Tauqeer",
          description:
            "A passionate Full Stack Web Developer and Mobile App Developer.",
          image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
          url: "https://developer-portfolio-1hanzla100.vercel.app",
          keywords: [
            "Maxwel",
            "Maxwel Santana",
            "@_max_sant",
            "Portfolio",
            "Maxwel Portfolio ",
            "Maxwel Santana Portfolio",
            "web developer",
            "full stack",
            "full stack web developer",
            "nodejs ",
            "expressjs",
            "reactjs ",
            "contextapi",
            "redux",
          ],
        }}
      />
      <Navigation />
    </div>
  );
}
