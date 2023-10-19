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

        // Save hobby to local
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

    const handleDayCheckboxChange = (dayNumber) => {
        if (hobbyDays.includes(dayNumber)) {
            setHobbyDays(hobbyDays.filter((day) => day !== dayNumber));
        } else {
            setHobbyDays([...hobbyDays, dayNumber]);
        }
    };

    return (
        <div className="hobby-form-container">
            <h1>Enter Hobby Here</h1>
            <div className="form-input">
                <label>Hobby Name: </label>
                <input
                    type="text"
                    value={hobbyName}
                    onChange={(e) => setHobbyName(e.target.value)}
                    placeholder="Hobby Name"
                />
            </div>
            <div className="form-input">
                <label>Select Days:</label>
                <div className="day-checkboxes">
                    {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
                        <label key={day}>
                            <input
                                type="checkbox"
                                checked={hobbyDays.includes(index)}
                                onChange={() => handleDayCheckboxChange(index)}
                            />
                            {day}
                        </label>
                    ))}
                </div>
            </div>
            <div className="form-input">
                <label>Start Time: </label>
                <input
                    type="time"
                    value={hobbyStartTime}
                    onChange={(e) => setHobbyStartTime(e.target.value)}
                />
            </div>
            <div className="form-input">
                <label>Finish Time:  </label>
                <input
                    type="time"
                    value={hobbyFinishTime}
                    onChange={(e) => setHobbyFinishTime(e.target.value)}
                />
            </div>
            <div className="form-input">
                <button onClick={handleAddHobby}>Add Hobby</button>
            </div>
            {errorMessage && <p>{errorMessage}</p>}
        </div>

    );
};

export default HobbyForm;
