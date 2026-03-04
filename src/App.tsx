import SectionLayout from "./components/layouts/SectionLayout";
import NavBar from "./components/navbar/NavBar";
import AboutMeSection from "./components/sections/about me/AboutMeSection";

const App = () => {
  return (
    <>
      <NavBar />
      <SectionLayout sectionId={"app-layout"}>
        <AboutMeSection />
      </SectionLayout>
    </>
  );
};

export default App;
