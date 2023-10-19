import React from 'react';
import HobbyForm from '../components/HobbyForm';
import moment from 'moment';

const HobbyPage = ({ onHobbiesChange, currentHobbies }) => {

    const handleAddHobby = (newHobby) => {
        const updatedHobbies = [...currentHobbies, newHobby];
        onHobbiesChange(updatedHobbies);
    };

    const handleDeleteHobby = (hobbyName) => {
        const updatedHobbies = currentHobbies.filter((hobby) => hobby.name !== hobbyName);
        onHobbiesChange(updatedHobbies);
    };

    return (
        <div className="hobby-container">
            <HobbyForm addHobby={handleAddHobby} hobbiesList={currentHobbies} />
            {/* Display the list of hobbies */}
            <ul>
                {currentHobbies.map((hobby, index) => (
                    <li key={index} className="hobby-list-item">
                        <div>
                            <span className="hobby-name">
                                {hobby.name}
                                {' | '}
                            </span>
                            <span className="hobby-details">
                                {hobby.days.map(day => moment().day(day).format('ddd')).join(', ')}
                                {' | '}
                                {moment(hobby.startTime, 'HH:mm').format('HH:mm')} - {moment(hobby.finishTime, 'HH:mm').format('HH:mm')}
                            </span>
                        </div>
                        <button className="delete-button" onClick={() => handleDeleteHobby(hobby.name)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HobbyPage;
