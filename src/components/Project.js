import React,{useState} from "react";
import RenameProject from './RenameProject'
import { XCircle, PencilFill } from "react-bootstrap-icons";
import Modal from "./Modal"
function Project({ edit, project }) {
  const [showModal, setShowModal] = useState(false)

  return (
      <div className='Project'>
          <div className="name">
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
                      <span className="delete">
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
