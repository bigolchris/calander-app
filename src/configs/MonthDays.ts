import { Date } from "../../types";

function genDates(): Date[] {
  let dates: Date[] = [];
  for (let i = 1; i <= 28; i++) {
    let date: Date = { day: i };
    dates.push(date);
  }
  return dates;
}

export const monthDates: Date[] = genDates();
