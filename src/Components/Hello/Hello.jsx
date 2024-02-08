import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Hello.scss';

function Hello() {
    const { theme } = useContext(ThemeContext);
    const [isTransformed, setIsTransformed] = useState(false);

    const toggleTransformation = () => setIsTransformed(!isTransformed);

    const logoImagePath = process.env.PUBLIC_URL + '/img/logo.png';
    const lightProfileImagePath = process.env.PUBLIC_URL + '/img/profile/light.jpeg';
    const darkProfileImagePath = process.env.PUBLIC_URL + '/img/profile/dark.jpeg';

    const imageToShow = isTransformed
        ? theme === 'light' ? lightProfileImagePath : darkProfileImagePath
        : logoImagePath;

    return (
        <div className={`hello ${theme} ${isTransformed ? 'transformed' : ''}`}>
            <div className="background-layer">
                <img src={`${process.env.PUBLIC_URL}/img/background/background.gif`} alt="" />
            </div>

            <div className="content">
                <div className="logo-container">
                    <img src={imageToShow} alt="Display" />
                </div>
                <div className="text-and-button-container">
                    <p>{isTransformed ? "About Me" : theme === 'light' ? "Welcome to the Light Theme" : "Welcome to the Dark Theme"}</p>
                    <button onClick={toggleTransformation}>{isTransformed ? "Go Back" : "Transform Background"}</button>
                    {isTransformed && <button>Another Action</button>}
                </div>
            </div>
        </div>
    );
}

export default Hello;
