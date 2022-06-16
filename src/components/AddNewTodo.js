import React, { useState, useContext, useEffect } from "react";
import Modal from "./Modal";
import TodoForm from "./TodoForm";
import { TodoContext } from "../context";
import {calendarItems} from '../constant'
import firebase from '../firebase'
import moment from 'moment'
import randomcolor from 'randomcolor'
function AddNewTodo() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
 
  const {projects, selectedProject } = useContext(TodoContext);
  const [todoProject,setTododProject] = useState(selectedProject);

useEffect(()=>{
    setTododProject(selectedProject);
},[selectedProject])
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text && !calendarItems.includes(todoProject)){
      firebase.firestore().collection('todo').add({
        text:text,
        date : moment(day).format('MM/DD/YYYY'),
        color:randomcolor(),
        checked:false,
        project:todoProject
      })
    }
 setShowModal(false)
 setText('')
 setDay(new Date())
  };
  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ New Todo</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TodoForm
          handleSubmit={handleSubmit}
          heading="Add new to do!"
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          todoProject={todoProject}
          setTodoProject={setTododProject}
          projects={projects}
          showButtons={true}
          setShowModal={setShowModal}
        />
      </Modal>
    </div>
  );
}

export default AddNewTodo;
