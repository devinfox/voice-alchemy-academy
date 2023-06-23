import React, { useState } from 'react';
import './DictionaryPopup.css';

function DictionaryPopup({ onClose }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const words = [
    { id: 1, word: 'Articulation', definition: 'Articulation refers to the clarity and precision with which speech sounds are produced. It involves the movement and coordination of the speech organs (such as the tongue, lips, and jaw) to form distinct consonant and vowel sounds. Developing good articulation skills is essential for clear and intelligible speech.' },
    { id: 2, word: 'Breath support', definition: 'Breath support refers to the efficient and controlled use of breath during vocalization. It involves diaphragmatic breathing, where the singer or speaker takes deep breaths, expanding the lower abdomen, and uses the breath to power the voice. Strong breath support provides stability, control, and endurance for sustained vocalization and helps prevent vocal strain.' },
    { id: 3, word: 'Resonance', definition: 'Resonance refers to the quality of sound produced when vibrations in the vocal tract amplify and enhance the tone of the voice. It is often achieved by proper positioning of the vocal cords and the resonating cavities (such as the throat, mouth, and nasal passages). Developing resonance can help improve the richness, depth, and projection of the voice.' },
  ];

  const handleWordClick = (wordId) => {
    setSelectedWord(selectedWord === wordId ? null : wordId);
  };

  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="dictionary-popup">
      <div className="dictionary-header">
  <div className="dictionary-header-left">
    <h2>Library</h2>
    <div className="library-link">Check our full library <a href="#">here</a></div>
  </div>
  <div className="dictionary-header-right">
    <div className="close-icon" onClick={onClose}>
      x
    </div>
  </div>
</div>
        <div className="header-left dictionary-header">
            <h2>Dictionary</h2>
          </div>
        <div className="dictionary-content">
          {words.map((word) => (
            <div
              key={word.id}
              className={`word-item ${selectedWord === word.id ? 'active' : ''}`}
              onClick={() => handleWordClick(word.id)}
            >
              <div className="word-label">{word.word}</div>
              {selectedWord === word.id && (
                <div className="definition">{word.definition}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DictionaryPopup;
