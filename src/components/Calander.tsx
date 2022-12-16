import React from "react";
import { Weekday, Date } from "../../types";
import { monthDates } from "../configs/MonthDays";
import { Weekdays } from "../configs/Weekday";

export const Calander: React.FC<{}> = ({}) => {
  const genDates = (date: number) => {
    for (let i = 0; i < 7; i++) {
      return (
        <button className="date" value={date}>
          <p>{date}</p>
        </button>
      );
    }
  };

  const genWeeks = (dates: Array<Date>) => {
    let daysInWeek = 7;
    let funcArray = [];

    for (let i = 0; i < dates.length; i += daysInWeek) {
      funcArray.push(dates.slice(i, i + daysInWeek));
    }
    return funcArray;
  };

  return (
    <div className="calander-container">
      <div className="datepicker-container"></div>
      <div className="weekdays-container">
        {Weekdays.map((day) => (
          <div className="week-day">{day}</div>
        ))}
      </div>
      <div className="calander">
        {genWeeks(monthDates).map((week) => (
          <div className="week">{week.map((day) => genDates(day.day))}</div>
        ))}
      </div>
    </div>
  );
};
