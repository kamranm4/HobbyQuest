import React, { useState, useEffect } from 'react';
import HobbyForm from '../components/HobbyForm';

const HobbyPromptPage = () => {
    const [hobbiesList, setHobbiesList] = useState([]);

    // Load hobbies from localStorage when the component mounts
    useEffect(() => {
        const storedHobbies = localStorage.getItem('hobbies');
        if (storedHobbies) {
            setHobbiesList(JSON.parse(storedHobbies));
        }
    }, []);

    const handleAddHobby = (newHobby) => {
        // Update the hobbies list and store it in localStorage
        const updatedHobbies = [...hobbiesList, newHobby];
        setHobbiesList(updatedHobbies);
        localStorage.setItem('hobbies', JSON.stringify(updatedHobbies));
    };

    const handleDeleteHobby = (hobbyName) => {
        const updatedHobbies = hobbiesList.filter((hobby) => hobby.name !== hobbyName);
        setHobbiesList(updatedHobbies);
        localStorage.setItem('hobbies', JSON.stringify(updatedHobbies));
    };

    return (
        <div>
            <h1>Hobby Form</h1>
            <HobbyForm addHobby={handleAddHobby} hobbiesList={hobbiesList} />
            {/* Display the list of hobbies */}
            <ul>
                {hobbiesList.map((hobby, index) => (
                    <li key={index} className="hobby-list-item">
                        <div>
                            <span className="hobby-name">{hobby.name}</span>
                            <span className="hobby-day">{hobby.days}</span>
                            <span className="hobby-startTime">{hobby.startTime}</span>
                            <span className="hobby-finishTime">{hobby.finishTime}</span>
                        </div>
                        <button className="delete-button" onClick={() => handleDeleteHobby(hobby.name)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HobbyPromptPage;



