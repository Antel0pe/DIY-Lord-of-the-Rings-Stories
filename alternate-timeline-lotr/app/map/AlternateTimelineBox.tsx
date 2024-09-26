import React from 'react';

interface AlternateTimelineBoxProps {
  text: string;
}

const AlternateTimelineBox: React.FC<AlternateTimelineBoxProps> = ({ text }) => {
  return (
    <div className="alternate-timeline-box">
      <h2 className="alternate-timeline-title">Alternate Timeline</h2>
      <p className="alternate-timeline-text">{text}</p>
    </div>
  );
};

export default AlternateTimelineBox;


