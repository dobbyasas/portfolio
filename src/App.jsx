import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';

import './App.scss';


function App() {
    return (
        <ThemeProvider>
            <Header />
            <AboutMe />
        </ThemeProvider>
    );
}

export default App;
