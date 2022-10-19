import type { NextPage } from "next";
import About from "components/pages/About";
import Works from "components/pages/Works";
import Skills from "components/pages/Skills";
import Contact from "components/pages/Contact";
import Achievements from "components/pages/Achievements";

const Home: NextPage = () => {
  return (
    <>
      <About />
      <Skills />
      <Works />
      <Achievements />
      <Contact />
    </>
  );
};

export default Home;
