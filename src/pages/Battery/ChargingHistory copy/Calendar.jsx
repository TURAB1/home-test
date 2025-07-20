import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import "./calendar.css";
dayjs.locale("ko");

const Calendar = ({ data = {} }) => {
  const today = dayjs();
  const [selectedYear, setSelectedYear] = useState(today.year());
  const [selectedMonth, setSelectedMonth] = useState(today.month() + 1); // month is 0-indexed

  const startOfMonth = dayjs(`${selectedYear}-${selectedMonth}-01`);
  const startDay = startOfMonth.day();
  const daysInMonth = startOfMonth.daysInMonth();

  const days = [];

  for (let i = 0; i < (startDay === 0 ? 6 : startDay - 1); i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const getKWh = (day) => {
    const key = `${selectedYear}-${String(selectedMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return data[key];
  };

  const years = Array.from({ length: 11 }, (_, i) => 2020 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}년
            </option>
          ))}
        </select>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}월
            </option>
          ))}
        </select>
      </div>
      <div className="calendar-days">
        {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
          <div className="calendar-day-name" key={day}>
            {day}
          </div>
        ))}
        {days.map((day, idx) => (
          <div className="calendar-cell" key={idx}>
            {day && (
              <>
                <div>{day}</div>
                {getKWh(day) && (
                  <div className="kwh">{getKWh(day)} kwh</div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
