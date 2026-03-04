import SectionLayout from "./components/layouts/SectionLayout";
import NavBar from "./components/navbar/NavBar";
import AboutMeSection from "./components/sections/about me/AboutMeSection";
import Skills from "./components/sections/skills/Skills";
import Projects from "./components/sections/projects/Projects";

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
      <SectionLayout sectionId={"projects"}>
        <Projects />
      </SectionLayout>
    </>
  );
};

export default App;
