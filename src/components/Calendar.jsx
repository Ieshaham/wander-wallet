// src/components/FullCalendarComponent.js
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // For drag and drop

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: 'Event 1', date: '2024-11-07' },
    { title: 'Event 2', date: '2024-11-08' },
  ]);

  const handleDateClick = (arg) => {
    alert('Date clicked: ' + arg.dateStr);
  };

  return (
    <div className="calendar-container h-20">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default Calendar;
