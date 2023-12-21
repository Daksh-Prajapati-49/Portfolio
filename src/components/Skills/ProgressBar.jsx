import React, { useEffect, useState } from 'react';
import './ProgressBar.css'; // Import or define your styles

const ProgressBar = ({ name, progress }) => {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    setBarWidth(progress);
  }, [progress]);

  return (
    <div className="progress-container">
      <div className="progress-label">{name}</div>
      <div className="progress-bar">
        <div
          className="progress-done"
          style={{ width: `${barWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
