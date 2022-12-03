import About from "components/pages/About";
import Works from "components/pages/Works";
import Skills from "components/pages/Skills";
import Contact from "components/pages/Contact";
import Achievements from "components/pages/Achievements";
import AppLayoutDesktop from "layout/AppLayout";
import Breadcrumb from "components/Breadcrumb";
import AboutText from "components/about/AboutText";
import WorkingExperience from "components/about/WorkingExperience";
import Education from "components/about/Education";
import ProfileCardMobile from "components/ProfileCardMobile";

const Home = () => {
  return (
    <>
      <div className="hidden md:block">
        <About />
        <Skills />
        <Works />
        <Achievements />
        <Contact />
      </div>

      <div className="block md:hidden">
        <div className="px-4 py-6">
          <ProfileCardMobile />
          <WorkingExperience className="py-10" />
          <Education />
        </div>
      </div>
    </>
  );
};

export default Home;
