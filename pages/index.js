import dynamic from "next/dynamic";
import SEO from "../components/SEO";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Experience = dynamic(() => import("../containers/Experience"));
const Education = dynamic(() => import("../containers/Education"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);

import { openSource } from "../portfolio";

//https://elvisdev-portfolio.netlify.app/

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Maxwel Santana",
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
      <Greetings />
      <Experience />
      <Education />
      <Projects />
      {githubProfileData && <GithubProfileCard prof={githubProfileData} />}
    </div>
  );
}

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());
  return {
    props: { githubProfileData },
  };
}
