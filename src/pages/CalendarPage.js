import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = ({ hobbies }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showHobbyDetails, setShowHobbyDetails] = useState(null);

    const onDayClick = (value, event) => {
        setSelectedDate(value);
        const hobbyForDay = hobbies.find(hobby => hobby.days.includes(value.getDay()));
        if (hobbyForDay) {
            setShowHobbyDetails(hobbyForDay);
        } else {
            setShowHobbyDetails(null);
        }
    };

    return (
        <div>
            <Calendar
                onClickDay={onDayClick}
                tileContent={({ date, view }) => {
                    const hobbyForDay = hobbies.find(hobby => hobby.days.includes(date.getDay()));
                    return (
                        view === 'month' && hobbyForDay ? <p>{hobbyForDay.name}</p> : null
                    );
                }}
            />

            {showHobbyDetails && (
                <div>
                    <h3>{showHobbyDetails.name}</h3>
                    <p>Days: {showHobbyDetails.days.join(', ')}</p>
                    <p>Start Time: {showHobbyDetails.startTime}</p>
                    <p>End Time: {showHobbyDetails.finishTime}</p>
                    <button onClick={() => setShowHobbyDetails(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default CalendarPage;
