import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnimationControls from '../components/AnimationControls';
import Sidebar from '../components/Sidebar';
import { getAnimationData } from '../api/animationAPI';

const AnimationPage: React.FC = () => {
  const { animationName } = useParams();
  const [animationData, setAnimationData] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [flip, setFlip] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (animationName) {
      getAnimationData(animationName).then(data => setAnimationData(data));
    }
  }, [animationName]);

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const handleScaleChange = (newScale: number) => {
    setScale(newScale);
  };

  const handleFlip = () => {
    setFlip(prev => !prev);
  };

  if (!animationData) return <div>Loading...</div>;

  return (
    <div className="animation-page">
      <Sidebar />
      <h1>{animationName}</h1>
      <div className={`animation ${flip ? 'flipped' : ''}`} style={{ transform: `scale(${scale})` }}>
        {/* Здесь будет отображение анимации на основе sprite sheet */}
      </div>
      <AnimationControls 
        onPlayPause={handlePlayPause} 
        onScaleChange={handleScaleChange} 
        onFlip={handleFlip} 
      />
    </div>
  );
};

export default AnimationPage;
