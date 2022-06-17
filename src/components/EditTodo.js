import React, { useState, useContext, useEffect } from "react";
import TodoForm from "./TodoForm";
import { TodoContext } from "../context";
import moment from "moment";
import firebase from "../firebase";
function EditTodo() {
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [todoProject, setTodoProject] = useState("");
  const {selectedTodo ,projects} = useContext(TodoContext);
  useEffect(() => {
    if (selectedTodo) {
      setText(selectedTodo.text);
      setDay(moment(selectedTodo.date, "MM/DD/YYYY"));
      setTodoProject(selectedTodo.project);
    }
  }, [selectedTodo]);

  useEffect(() => {
    if (selectedTodo) {
      firebase
        .firestore()
        .collection("todo")
        .doc(selectedTodo.id)
        .update({
          text,
          date: moment(day).format("MM/DD/YYYY"),
          project: todoProject,
        });
    }
  }, [text, day, todoProject]);

  const handleSubmit = () => {};

  return (
    <div>
      {selectedTodo && (
        <div className="EditTodo">
          <TodoForm
            handleSubmit={handleSubmit}
            text={text}
            setText={setText}
            day={day}
            setDay={setDay}
            projects={projects}
            setTodoProject={setTodoProject}
            todoProject={todoProject}
          />
        </div>
      )}
    </div>
  );
}

export default EditTodo;
