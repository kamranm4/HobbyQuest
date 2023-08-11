import React, { useState } from 'react';

const HobbyForm = ({ addHobby, hobbiesList }) => {

    const [hobbyName, setHobbyName] = useState('');
    const [hobbyDays, setHobbyDays] = useState([]);
    const [hobbyStartTime, setHobbyStartTime] = useState('');
    const [hobbyFinishTime, setHobbyFinishTime] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddHobby = () => {
        const exists = hobbiesList.some((hobby) => hobby.name === hobbyName);
        if (exists) {
            setErrorMessage('Error: Hobby with the same name already exists.');
            return;
        }
        // save hobby to local
        const newHobby = {
            name: hobbyName,
            days: hobbyDays,
            startTime: hobbyStartTime,
            finishTime: hobbyFinishTime,
        };

        // Add the new hobby to local storage
        const storedHobbies = localStorage.getItem('hobbies');
        const parsedHobbies = storedHobbies ? JSON.parse(storedHobbies) : [];
        const updatedHobbies = [...parsedHobbies, newHobby];
        localStorage.setItem('hobbies', JSON.stringify(updatedHobbies));

        // Call the addHobby function passed from the parent component
        addHobby(newHobby);

        // Clear form inputs
        setHobbyName('');
        setHobbyDays([]);
        setHobbyStartTime('');
        setHobbyFinishTime('');
        setErrorMessage('');
    };

    const handleDayCheckboxChange = (day) => {
        if (hobbyDays.includes(day)) {
            // Remove the day if it's already selected
            setHobbyDays(hobbyDays.filter((selectedDay) => selectedDay !== day));
        } else {
            // Add the day if it's not selected
            setHobbyDays([...hobbyDays, day]);
        }
    };

    return (
        <div>
            <h1>Enter Hobby Here</h1>
            {/* Add form to prompt hobby details here */}
            <input
                type="text"
                value={hobbyName}
                onChange={(e) => setHobbyName(e.target.value)}
                placeholder="Hobby Name"
            />
            <div>
                <p>Select Days:</p>
                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                    <label key={day}>
                        <input
                            type="checkbox"
                            checked={hobbyDays.includes(day)}
                            onChange={() => handleDayCheckboxChange(day)}
                        />
                        {day}
                    </label>
                ))}
            </div>
            {/* Add other inputs for hobbyDays and hobbyFrequency */}
            <div>
                <label>Start Time:</label>
                <input
                    type="time"
                    value={hobbyStartTime}
                    onChange={(e) => setHobbyStartTime(e.target.value)}
                />
            </div>
            <div>
                <label>Finish Time:</label>
                <input
                    type="time"
                    value={hobbyFinishTime}
                    onChange={(e) => setHobbyFinishTime(e.target.value)}
                />
            </div>
            <button onClick={handleAddHobby}>Add Hobby</button>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default HobbyForm;
