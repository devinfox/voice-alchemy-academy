import React, { useState } from 'react';
import './Calendar.css';

function CalendarPage() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return days;
  };

  const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);

  const getWeekdayLabels = () => {
    const weekdayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return weekdayLabels.map((label) => (
      <div key={label} className="weekday">
        {label}
      </div>
    ));
  };

  const getEmptyCells = (firstDayOfMonth) => {
    const emptyCells = [];
    const dayOfWeek = firstDayOfMonth.getDay();
    for (let i = 0; i < dayOfWeek; i++) {
      emptyCells.push(<div key={`empty-${i}`} className="empty-cell"></div>);
    }
    return emptyCells;
  };

  const renderCalendar = () => {
    const firstDayOfMonth = daysInMonth[0];
    const emptyCells = getEmptyCells(firstDayOfMonth);

    return (
      <div className="calendar">
        <div className="calendar-header">
          <button className="next-arrow" onClick={handlePreviousMonth}>&lt;</button>
          <div className="month-year">
            <span>{getMonthName(selectedMonth)}</span>
            <span>&nbsp;</span>
            <span>{selectedYear}</span>
          </div>
          <button className="next-arrow" onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="weekdays">{getWeekdayLabels()}</div>
        <div className="days">
          {emptyCells}
          {daysInMonth.map((day) => (
            <div key={day.toISOString()} className="calendar-date">
              {day.getDate()}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const getMonthName = (month) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames[month];
  };

  const handlePreviousMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  return (
    <div>
      {renderCalendar()}
    </div>
  );
}

export default CalendarPage;
