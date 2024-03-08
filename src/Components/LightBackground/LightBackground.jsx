import React from 'react';
import './LightBackground.scss';

const LightBackground = () => {
  const musicNotes = Array.from({ length: 5 }).map((_, index) => (
    <div key={index} className={`music-note note-${index + 1}`}>
      🎵 
    </div>
  ));

  return (
    <div className="light-background">
      {musicNotes}
    </div>
  );
};

export default LightBackground;
