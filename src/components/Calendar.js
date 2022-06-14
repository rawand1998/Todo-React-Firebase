import React from "react";
import { CalendarDate, CaretUp } from "react-bootstrap-icons";

function Calendar() {
  const calendarItems = ["today", "next 7 days", "all days"];
  return (
    <div className="Calendar">
      <div className="header">
        <div className="title">
          <CalendarDate />
          <p>Calendar</p>
        </div>
        <div className="btn">
         <span><CaretUp /></span> 
        </div>
      </div>
      <div className="items">
        {calendarItems.map((item) => (
          <div className="item" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
