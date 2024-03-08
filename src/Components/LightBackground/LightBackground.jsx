import React from 'react';
import './LightBackground.scss';

const LightBackground = () => {
  const musicNotesCount = 100;
  const musicNotes = Array.from({ length: musicNotesCount }).map((_, index) => (
    <div key={index} className={`music-note note-${index % 20}`}> 
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
