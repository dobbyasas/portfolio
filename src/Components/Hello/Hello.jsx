import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import './Hello.scss';

function Hello() {
    const { theme } = useContext(ThemeContext);
    const [isTransformed, setIsTransformed] = useState(false);

    const toggleTransformation = () => setIsTransformed(!isTransformed);

    return (
        <div className={`hello ${theme} ${isTransformed ? 'transformed' : ''}`}>
            <div className="background-layer">
                <img src={`${process.env.PUBLIC_URL}/img/background/background.gif`} alt="" /> 
            </div>

            <div className="split-container">
                <div className="left-side">
                    <div className={`header ${theme}`}>
                        <div className="logo">
                            <motion.a
                            href="#"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            >
                                <img src="/img/logo.svg" alt="" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div className="right-side">
                    <div className="text-and-button-container">
                        <h3>{isTransformed ? "About Me" : theme === 'light' ? "Web, app and game developer" : "Musician and producer"}</h3>
                        <p>{isTransformed ? "Here's a bit about me." : theme === 'light' ? "React.js, Swift, Unity" : "Ableton"}</p>
                        <button onClick={toggleTransformation}>{isTransformed ? "Go Back" : "Bum"}</button>
                        {isTransformed && <button>Another Action</button>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hello;
