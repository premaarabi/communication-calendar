// src/components/CalendarView.js
import React from 'react';
import { Calendar } from 'react-calendar';

const CalendarView = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <h2>Calendar View</h2>
      <Calendar
        onChange={setDate}
        value={date}
      />
    </div>
  );
};

export default CalendarView;
