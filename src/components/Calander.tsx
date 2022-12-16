import React, { MouseEvent, useState } from "react";
import { Weekday, Date } from "../../types";
import { monthDates } from "../configs/MonthDays";
import { Weekdays } from "../configs/Weekday";
import { LeftIcon } from "../assets/icons/LeftIcon";
import { RightIcon } from "../assets/icons/RightIcon";

export const Calander: React.FC<{}> = ({}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>();

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedDate(e.currentTarget.getAttribute("value"));
  };

  const genDates = (date: number) => {
    let selectedDateNumber: number = selectedDate ? parseInt(selectedDate) : 0;
    for (let i = 0; i < 7; i++) {
      return (
        <button
          className={`date ${date == 18 ? "today" : ""} ${
            date == selectedDateNumber ? "selected" : ""
          } `}
          onClick={handleChange}
          value={date}
        >
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
      <div className="datepicker-container">
        <LeftIcon />
        <span>Febuary 2022</span>
        <RightIcon />
      </div>
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
