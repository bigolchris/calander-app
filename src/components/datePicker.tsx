import React from "react";
import { Calander } from "./Calander";

export const DatePicker: React.FC<{}> = ({}) => {
  return (
    <div className="date-container">
      <div className="background-container"></div>
      <Calander />
    </div>
  );
};
