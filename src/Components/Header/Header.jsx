import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Header.scss';

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <header className={`header ${theme}`}>
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
            <nav className="navigation">
                <motion.ul
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">My Projects</a></li>
                    <li><a href="#resume">My Resume</a></li>
                    <li><a href="#contact">Contacts</a></li>
                </motion.ul>
            </nav>
            <div className={`theme-switcher ${theme}`} onClick={toggleTheme}>
                <div className="inner-circle">
                    {theme === 'dark' ? <FaMoon /> : <FaSun />}
                </div>
            </div>
        </header>
    );
}

export default Header;