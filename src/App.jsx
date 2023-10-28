import ProjectsSidebar from "./components/Projects/ProjectSidebar.component.jsx";
import NewProject from "./components/Projects/NewProject.component.jsx";
import NoProjectSelected from "./components/Projects/NoProjectSelected.component.jsx";
import { useState } from "react";
import SelectedProject from "./components/Projects/SelectedProject.component.jsx";

const App = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //undefined means no project is selected, while null means adding a new project
    projects: [],
    tasks: [],
  });

  const addTaskHandler = (text) => {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const deleteTaskHandler = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const selectProjectHandler = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const startAddProjectHandler = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const cancelButtonHandler = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const addProjectHandler = (projectData) => {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const deleteProjectHandler = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={deleteProjectHandler}
      onAddTask={addTaskHandler}
      onDeleteTask={deleteTaskHandler}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={addProjectHandler} onCancel={cancelButtonHandler} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={startAddProjectHandler} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={startAddProjectHandler}
        projects={projectsState.projects}
        onSelectProject={selectProjectHandler}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
};

export default App;
