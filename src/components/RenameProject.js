import React, { useState, useContext } from "react";
import ProjectForm from "./ProjectForm";
import firebase from "../firebase";
import { TodoContext } from "../context";
function RenameProject({ project, setShowModal }) {
  const [newProjectName, setNewProjectName] = useState(project.name);
  const { setSelectedProject, selectedProject } = useContext(TodoContext);
  const renameProject = (project, newProjectName) => {
    const projectRef = firebase.firestore().collection("projects");
    const todosRef = firebase.firestore().collection("todo");

    const { name: oldProjectName } = project;
    projectRef
      .where("name", "==", newProjectName)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          alert("project with same name already exists");
        } else {
          projectRef
            .doc(project.id)
            .update({ name: newProjectName })
            .then(() => {
              todosRef
                .where("project", "==", oldProjectName)
                .get()
                .then((querySnapshot) => {
                  querySnapshot.forEach((doc) => {
                    doc.ref.update({
                      project: newProjectName,
                    });
                  });
                });
            })
            .then(() => {
              if (selectedProject == oldProjectName) {
                setSelectedProject(newProjectName);
              }
            });
        }
      });
  };
  function handleSubmit(e) {
    e.preventDefault();
    renameProject(project, newProjectName);
    setShowModal(false);
  }

  return (
    <div className="RenameProject">
      <ProjectForm
        handleSubmit={handleSubmit}
        heading="Edit project name!"
        value={newProjectName}
        setValue={setNewProjectName}
        setShowModal={setShowModal}
        confirmButtonText="Confirm"
      />
    </div>
  );
}

export default RenameProject;
