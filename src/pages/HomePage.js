import React, { useState } from 'react';
import Button from '../components/Button/Button';
import DictionaryPopup from '../components/DictionaryPopup/DictionaryPopup';
import EarTrainingApp from '../components/EarTrainingApp';
import Placeholder from '../components/Placeholder/Placeholder';
import GoalsTodosPopup from '../components/GoalsTodosPopup/GoalsTodosPopup';
import VideoLibrary from '../components/VideoLibrary/VideoLibrary';

function HomePage() {
  const [isGoalsTodosOpen, setIsGoalsTodosOpen] = useState(false);
  const [isDictionaryOpen, setIsDictionaryOpen] = useState(false);
  const [isVideoLibraryOpen, setIsVideoLibraryOpen] = useState(false);

  const handleDictionaryClick = () => {
    setIsDictionaryOpen(true);
  };

  const handleCloseDictionary = () => {
    setIsDictionaryOpen(false);
  };

  const handleVideoLibraryClick = () => {
    setIsVideoLibraryOpen(true);
  };

  const handleCloseVideoLibrary = () => {
    setIsVideoLibraryOpen(false);
  };

  const handleGoalsTodosClick = () => {
    console.log('Opening Goals and To-dos');
    setIsGoalsTodosOpen(true);
  };

  const handleCloseGoalsTodos = () => {
    console.log('Closing Goals and To-dos');
    setIsGoalsTodosOpen(false);
  };

  // Video data
  const videos = [
    {
      id: 1,
      title: 'Video 1',
      source: '/Users/devinfox/Desktop/voice-alchemy-app/src/videos/A005_C029_0925TO_001.mp4',
    },
    {
      id: 2,
      title: 'Video 2',
      source: '/Users/devinfox/Desktop/voice-alchemy-app/src/videos/A005_C029_0925TO_001.mp4',
    },
    {
      id: 3,
      title: 'Video 3',
      source: '/Users/devinfox/Desktop/voice-alchemy-app/src/videos/A005_C029_0925TO_001.mp4',
    },
    // Add more videos as needed
  ];

  return (
    <div className="home-page-container">
      <div className="top-part-container">
        <Button label="My Progress" />
        <Button label="Goals and To-dos" onClick={handleGoalsTodosClick} />
      </div>
      <div className="earTrainingContainer">
        <Placeholder />
      </div>
      <div className="button-container">
        <div className="button-column">
          <Button label="VIDEO LIBRARY" onClick={handleVideoLibraryClick} />
          <Button label="LIBRARY" onClick={handleDictionaryClick} />
        </div>
        <div className="button-column">
          <Button label="FIND A COACH" />
          <Button label="METRONOME" />
        </div>
      </div>
      {isDictionaryOpen && <DictionaryPopup onClose={handleCloseDictionary} />}
      {isVideoLibraryOpen && <VideoLibrary videos={videos} onClose={handleCloseVideoLibrary} />}
      {isGoalsTodosOpen && <GoalsTodosPopup onClose={handleCloseGoalsTodos} />}
    </div>
  );
}

export default HomePage;
