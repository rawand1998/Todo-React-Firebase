import React, { createContext, useState } from "react";
import { useTodos, useProjects, useFilterTodos } from "../hooks";
const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const defaultProject = "today";
  const [selectedProject, setSelectedProject] = useState(defaultProject);
  const [selectedTodo, setSelectedTodo] = useState(undefined);
  const todos = useTodos();
  const projects = useProjects();
  const filterTodos = useFilterTodos();
  return (
    <TodoContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        todos,
        projects,
        selectedProject,
        defaultProject,
        selectedTodo,
        setSelectedTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContextProvider, TodoContext };
