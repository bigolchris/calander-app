import React from "react";
// import { Weekday, Date } from "../../types";
import { Weekdays } from "../configs/Weekday";

export const Calander: React.FC<{}> = ({}) => {
  return (
    <div className="calander-container">
      <div className="datepicker-container"></div>
      <div className="weekdays-container">
        {Weekdays.map((day) => (
          <div className="week-day">{day}</div>
        ))}
      </div>
      <div className="calander"></div>
    </div>
  );
};
