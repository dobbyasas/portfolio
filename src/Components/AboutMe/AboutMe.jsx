import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './AboutMe.scss';

function AboutMe() {
    const { theme } = useContext(ThemeContext);

    const isDark = theme === 'dark';

    const text = isDark
        ? "I'm a hacker passionate about security and exploring the depths of code."
        : "I'm a React programmer dedicated to building engaging user experiences.";

    const imagePath = isDark
        ? "/img/profile/dark.jpeg"
        : "/img/profile/light.jpg";


    return (
        <div className={`about-me ${theme}`} style={{ backgroundImage: `url(${imagePath})` }}>
            <div className="text-section">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default AboutMe;
