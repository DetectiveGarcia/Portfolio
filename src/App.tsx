import SectionLayout from "./components/layouts/SectionLayout";
import NavBar from "./components/navbar/NavBar";

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
