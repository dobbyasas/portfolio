import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Hello.scss';

function Hello() {
    const { theme } = useContext(ThemeContext);

    const divStyle = {
        backgroundImage: "url('/img/background/background.gif')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const textContent = theme === 'light' ? 
        { welcomeText: "Welcome to the Light Theme", buttonText: "Light Mode" } : 
        { welcomeText: "Welcome to the Dark Theme", buttonText: "Dark Mode" };

    return (
        <div className={`hello ${theme}`} style={divStyle}>
            <div className="center-image-container">
                <img src="/img/logo.png" alt="Center" />
            </div>
            <div className="text-and-button-container">
                <p>{textContent.welcomeText}</p>
                <button>{textContent.buttonText}</button>
            </div>
        </div>
    );
}

export default Hello;
