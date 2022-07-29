import type { NextPage } from "next";
import About from "components/pages/About";
import Works from "components/pages/Works";
import Skills from "components/pages/Skills";
import Contact from "components/pages/Contact";

const Home: NextPage = () => {
  return (
    <>
      <About />
      <Works />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
