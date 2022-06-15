import React from "react";
import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TodoForm({
  handleSubmit,
  heading = false,
  text,
  setText,
  day,
  setDay,
  setShowModal,
  showButtons = false,
  projects={projects}
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="text">
        {heading && <h3>{heading}</h3>}

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="To do ..."
          autoFocus
        />
      </div>
      <div className="remind">
        <Bell />
        <p>Remind Me!</p>
      </div>
      <div className="pick-day">
        <div className="title">
          <CalendarDay />
          <p>Choose a day</p>
        </div>
        <DatePicker value={day} onChange={(day) => setDay(day)} />
      </div>
  
      <div className="pick-project">
        <div className="title">
          <Palette />
          <p>Choose a project</p>
        </div>
        <div className="projects">
          <div className="project active">personal</div>
          <div className="project">work</div>
          <div className="project">work</div>
        </div>
      </div>
      {showButtons && (
        <div>
          <div className="cancel" onClick={() => setShowModal(false)}>
            <X size="40" />
          </div>
          <div className="confirm">
            <button>+ Add to do</button>
          </div>
        </div>
      )}
    </form>
  );
}
export default TodoForm;
