import ProjectsSidebar from "./components/ProjectSidebar/ProjectSidebar.component.jsx";
import NewProject from "./components/NewProject/NewProject.component.jsx";

const App = () => {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
};

export default App;
