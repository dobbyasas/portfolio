import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './Components/Header/Header';
import './App.scss';

function App() {
    return (
        <ThemeProvider>
            <Header />
        </ThemeProvider>
    );
}

export default App;
