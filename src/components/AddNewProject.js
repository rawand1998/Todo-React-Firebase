import React,{useState} from 'react'
import {Plus} from 'react-bootstrap-icons'
import Modal from './Modal'
import ProjectForm from './ProjectForm'
function AddNewProject(){
    const [showModal, setShowModal] = useState(false)
    const [PojectName, setProjectName] = useState('')
    const handleSubmit=(e)=>{

    }
    return (
        <div className='AddNewProject'>
                  <div className="add-button" onClick={() => setShowModal(true)}>
                <span>
                    <Plus size="20" />
                </span>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ProjectForm 
                handleSubmit={handleSubmit}
                heading="Add New Project"
                value={PojectName}
                setValue={setProjectName}
                confirmButtonText="+ Add Project"
                setShowModal={setShowModal}
                />

            </Modal>
        </div>
    )
}

export default AddNewProject