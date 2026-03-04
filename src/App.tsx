import SectionLayout from "./components/layouts/SectionLayout";
import NavBar from "./components/navbar/NavBar";
import AboutMeSection from "./components/sections/about me/AboutMeSection";
import Skills from "./components/sections/skills/Skills";
import Projects from "./components/sections/projects/Projects";
import Testimonials from "./components/sections/testimonials/Testimonials";
import Contact from "./components/sections/contact me/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <SectionLayout sectionId={"about-me"}>
        <AboutMeSection />
      </SectionLayout>
      <SectionLayout sectionId={"skills"}>
        <Skills />
      </SectionLayout>
      <SectionLayout sectionId={"project"}>
        <Projects />
      </SectionLayout>
      <SectionLayout sectionId={"testimonials"}>
        <Testimonials />
      </SectionLayout>
      <SectionLayout sectionId={"contact"}>
        <Contact />
      </SectionLayout>
    </>
  );
};

export default App;
