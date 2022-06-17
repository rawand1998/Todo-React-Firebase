import React,{useState,useContext} from "react";
import RenameProject from './RenameProject'
import { XCircle, PencilFill } from "react-bootstrap-icons";
import Modal from "./Modal"
import {TodoContext} from '../context'
import firebase from '../firebase'
function Project({ edit, project }) {
  const [showModal, setShowModal] = useState(false)
  const {setSelectedProject,selectedProject,defaultProject} = useContext(TodoContext)
  const deleteProject = (project)=>{
    firebase
    .firestore()
    .collection('projects')
    .doc(project.id)
    .delete()
    .then(()=>{
        firebase.firestore().collection('todo').where('project','==',project.name).get().then((snapShot)=>{
          snapShot.forEach(doc =>doc.ref.delete())
        }).then(()=>{
            if(selectedProject==project.name){
                selectedProject=defaultProject
            }

        })
    })
  }
  return (
      <div className='Project'>
          <div className="name" onClick={() =>setSelectedProject(project.name)}>
              {project.name}
          </div>
          <div className="btns">
              {
                  edit ?
                  <div className="edit-delete">
                      <span
                          className="edit"
                          onClick={ () => setShowModal(true)}
                      >
                          <PencilFill size="13" />
                      </span>
                      <span className="delete" onClick={ () => deleteProject(project)}>
                          <XCircle size="13" />
                      </span>
                  </div>
                  :
                  project.numOfTodos === 0 ?
                  ""
                  :
                  <div className="total-todos">
                      {project.numOfTodos}
                  </div>
              }
          </div>
          <Modal showModal={showModal} setShowModal={setShowModal}>
              <RenameProject project={project} setShowModal={setShowModal}/>
          </Modal>
      </div>
  )
}

export default Project;
