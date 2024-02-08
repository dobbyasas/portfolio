import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

import Header from './Components/Header/Header';
import Hello from './Components/Hello/Hello';

import './App.scss';


function App() {
    return (
        <ThemeProvider>
            <Header />
            <Hello />
        </ThemeProvider>
    );
}

export default App;
