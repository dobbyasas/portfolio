import React, { useEffect, useState } from 'react';
import './DarkBackground.scss';

const DarkBackground = () => {
  const [columns, setColumns] = useState([]);

  const generateMatrixRain = () => {
    const columnCount = window.innerWidth / 20;
    let cols = [];
    for (let i = 0; i < columnCount; i++) {
      cols.push(i);
    }
    setColumns(cols);
  };

  useEffect(() => {
    generateMatrixRain();
    window.addEventListener('resize', generateMatrixRain);
    return () => window.removeEventListener('resize', generateMatrixRain);
  }, []);

  return (
    <div className="dark-background">
      {columns.map((col) => (
        <MatrixColumn key={col} />
      ))}
    </div>
  );
};

const MatrixColumn = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const speed = Math.random() * (5000 - 2000) + 2000;

  const generateLetters = () => {
    let result = '';
    const charactersLength = characters.length;
    const columnHeight = Math.floor(Math.random() * (30 - 10) + 10);
    for (let i = 0; i < columnHeight; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result.split('');
  };

  return (
    <div className="matrix-column" style={{ animationDuration: `${speed}ms` }}>
      {generateLetters().map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </div>
  );
};

export default DarkBackground;
