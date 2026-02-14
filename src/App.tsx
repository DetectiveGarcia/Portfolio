import SectionLayout from "./layouts/SectionLayout";
import NavBar from "./navbar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <SectionLayout sectionId={"app-layout"}>
        <div>App</div>
      </SectionLayout>
    </>
  );
};

export default App;
