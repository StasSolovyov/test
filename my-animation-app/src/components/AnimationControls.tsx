import React, { useState } from 'react';

interface AnimationControlsProps {
  onPlayPause: () => void;
  onScaleChange: (scale: number) => void;
  onFlip: () => void;
}

const AnimationControls: React.FC<AnimationControlsProps> = ({ onPlayPause, onScaleChange, onFlip }) => {
  const [scale, setScale] = useState(1);

  const handleScaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newScale = parseInt(event.target.value);
    setScale(newScale);
    onScaleChange(newScale);
  };

  return (
    <div className="controls">
      <button onClick={onPlayPause}>Play/Pause</button>
      <select value={scale} onChange={handleScaleChange}>
        <option value={1}>1x</option>
        <option value={2}>2x</option>
        <option value={3}>3x</option>
      </select>
      <button onClick={onFlip}>Flip</button>
    </div>
  );
};

export default AnimationControls;
