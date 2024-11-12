// src/components/FullCalendarComponent.js
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // For drag and drop

const Calendar = () => {
  // State to manage trips and their budgets
  const [events, setEvents] = useState([]); // Empty calendar initially

  // State to track the total available budget
  const [availableBudget, setAvailableBudget] = useState([0]); 

  // State to store the new trip form data
  const [newTrip, setNewTrip] = useState({
    title: '',
    start: '',
    end: '',
    budget: ''
  });

  // Handle date clicks on the calendar (for adding trips)
  const handleDateClick = (arg) => {
    alert('Date clicked: ' + arg.dateStr);
    setNewTrip({ ...newTrip, start: arg.dateStr, end: arg.dateStr }); // Pre-fill start date
  };

  // Handle form submission to add a new trip
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, start, end, budget } = newTrip;

    // Check if there are enough available funds
    if (parseFloat(budget) <= availableBudget) {
      // Add the new trip to the events list
      setEvents([
        ...events,
        {
          title,
          start,
          end,
          budget: parseFloat(budget),
        }
      ]);

      // Deduct the trip budget from the available budget
      setAvailableBudget(availableBudget - parseFloat(budget));

      // Clear the form
      setNewTrip({ title: '', start: '', end: '', budget: '' });
    } else {
      alert('Not enough budget available.');
    }
  };

  // Update form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTrip({ ...newTrip, [name]: value });
  };

  return (
    <div className="calendar-container">
      <h1>Travel Budget Calendar</h1>

      {/* Display the remaining available budget */}
      <div>
      <div className="budget-info">
        <p>Remaining Budget: ${availableBudget}</p>
      </div>

      {/* Add Trip Form */}
      <form onSubmit={handleSubmit} className="trip-form">
        <div>
          <label>Trip Title:</label>
          <input
            type="text"
            name="title"
            value={newTrip.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            name="start"
            value={newTrip.start}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            name="end"
            value={newTrip.end}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Budget:</label>
          <input
            type="number"
            name="budget"
            value={newTrip.budget}
            onChange={handleInputChange}
            min="0"
            step="0.01"
            required
          />
        </div>
        <button type="submit">Add Trip</button>
      </form>
      </div>

      {/* FullCalendar component */}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events} // Pass the events (trips) here
        dateClick={handleDateClick} // Trigger the date click event
      />
    </div>
  );
};

export default Calendar;
