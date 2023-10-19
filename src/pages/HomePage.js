import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Home Page</h1>
                <p>
                    This is a collaborative scheduling app where you can schedule your hobbies
                    and activities. Start by adding your hobbies on the Hobby Prompt
                    page or view your schedule on the Calendar page.
                </p>
            </div>
            <div className="button-container">
                <Link to="/hobby-prompt"><button className="home-button">Hobby Prompt</button></Link>
                <Link to="/calendar"><button className="home-button">Calendar</button></Link>
            </div>
        </div>
    );
};

export default HomePage;

