import React from 'react';

interface AlternateTimelineBoxProps {
  text: string;
}

const AlternateTimelineBox: React.FC<AlternateTimelineBoxProps> = ({ text }) => {
  return (
    <div className="overflow-auto">
      <h2 className="text-lg font-bold">Alternate Timeline</h2>
      <p>{text}</p>
    </div>
  );
};

export default AlternateTimelineBox;

