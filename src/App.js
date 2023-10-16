import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CalendarPage from './components/CalendarPage';
import HobbyPromptPage from './pages/HobbyPromptPage';
import SocialPage from './pages/SocialPage';
import FriendCalendarPage from './pages/FriendCalendarPage';

const App = () => {
    const [hobbies, setHobbies] = useState([]); // Maintain a state for hobbies

    // Load hobbies from localStorage when the component mounts
    useEffect(() => {
        const storedHobbies = localStorage.getItem('hobbies');
        if (storedHobbies) {
            setHobbies(JSON.parse(storedHobbies));
        }
    }, []);

    const handleHobbiesChange = (updatedHobbies) => {
        setHobbies(updatedHobbies);
        localStorage.setItem('hobbies', JSON.stringify(updatedHobbies));
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/calendar" element={<CalendarPage hobbies={hobbies} />} />
                <Route path="/hobby-prompt" element={<HobbyPromptPage onHobbiesChange={handleHobbiesChange} currentHobbies={hobbies} />} />
                <Route path="/social" element={<SocialPage />} />
                <Route path="/friend-calendar/:friendId" element={<FriendCalendarPage />} />
            </Routes>
        </Router>
    );
};

export default App;
