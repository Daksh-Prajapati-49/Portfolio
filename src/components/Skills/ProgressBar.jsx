import React from 'react';
import './ProgressBar.css';

const BLOCKS = 20;

// Renders an ASCII-style bar like [████████████░░░░░░░░] 60%, filling in once `animate` is true.
const ProgressBar = ({ name, progress, animate, delay = 0 }) => {
  const filled = Math.round((progress / 100) * BLOCKS);

  return (
    <div className="progress-container">
      <span className="progress-label">{name}</span>
      <span className="progress-bar" aria-label={`${name}: ${progress}%`}>
        [
        {Array.from({ length: BLOCKS }, (_, i) => (
          <span
            key={i}
            className={`progress-block ${i < filled && animate ? 'progress-block--on' : ''}`}
            style={{ transitionDelay: `${delay + i * 30}ms` }}
          >
            {i < filled && animate ? '█' : '░'}
          </span>
        ))}
        ]
      </span>
      <span className="progress-pct">{progress}%</span>
    </div>
  );
};

export default ProgressBar;
