import React from "react";

import { XCircle, PencilFill } from "react-bootstrap-icons";
function Project({ edit, project }) {
    console.log("Project" , project);
  return (
    <div className="Project">
      <div className="name">{project.name}</div>
      <div className="btns">
        {
        edit ?
          <div className="edit-delete">
            <span>
           
              <PencilFill size="15" />
            </span>
            <span>
              <XCircle size="13" />
            </span>
          </div>
             :
             project.todoNumber === 0 ?
             ""
             :
             <div className="total-todos">
                 {project.numOfTodos}
             </div>
        }
      </div>
    </div>
  );
}

export default Project;
