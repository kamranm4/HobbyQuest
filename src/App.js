import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CalendarPage from './components/CalendarPage';
import HobbyPromptPage from './pages/HobbyPromptPage';
import SocialPage from './pages/SocialPage';
import FriendCalendarPage from './pages/FriendCalendarPage';

const App = () => {
    // Define the addHobby function
    const addHobby = (hobby) => {
        // Implement the logic to add the hobby to local storage or perform other actions
        // For now, let's log the hobby to the console
        console.log('Adding hobby:', hobby);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                {/* Pass the addHobby function to HobbyPromptPage */}
                <Route path="/hobby-prompt" element={<HobbyPromptPage addHobby={addHobby} />} />
                <Route path="/social" element={<SocialPage />} />
                <Route path="/friend-calendar/:friendId" element={<FriendCalendarPage />} />
            </Routes>
        </Router>
    );
};

export default App;


