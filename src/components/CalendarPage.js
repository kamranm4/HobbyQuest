import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); // Initial selected date

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <h1>Calendar Page</h1>
            <div className="calendar-container">
                <Calendar
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </div>
        </div>
    );
};

export default CalendarPage;

