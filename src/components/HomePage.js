import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Make sure to import your CSS file

const HomePage = () => {
    return (
        <div className="home-container">
            <h1 className="home-heading">Home Page</h1>
            <p className="home-description">
                This is a collaborative scheduling app where you can set time-based goals for your hobbies
                and activities. Start by adding your hobbies on the&nbsp;
                <Link to="/hobby-prompt">Hobby Prompt</Link>
                &nbsp;page or view your schedule on the&nbsp;
                <Link to="/calendar">Calendar</Link>
                &nbsp;page.
                <Link to="/social">View Social</Link>
            </p>
        </div>
    );
};

export default HomePage;

