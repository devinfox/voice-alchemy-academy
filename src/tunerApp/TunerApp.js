import React from 'react';

const TunerApp = () => {
  const activeBg = '#4fb605';
  const textColor = '#fff';

  const handleKeyClick = (keyCode) => {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!key) return;

    const keyNote = key.getAttribute('data-note');

    key.classList.add('playing');
    note.innerHTML = keyNote;
    audio.currentTime = 0;
    audio.play();
  };

  const handleTransitionEnd = (e) => {
    e.target.classList.remove('playing');
  };

  const handleNumberBtnClick = (e) => {
    const btns = document.querySelectorAll('.numbersKeys ul li');
    btns.forEach((btn) => {
      btn.classList.remove('pressed');
    });
    e.target.classList.add('pressed');
  };

  const invertBackground = (isInvert) => {
    const body = document.body;
    const meterPointer = document.querySelector('.meter-pointer');
    const meterDot = document.querySelector('.meter-dot');

    if (isInvert) {
      body.style.backgroundColor = activeBg;
      body.style.color = textColor;
      meterPointer.style.backgroundColor = textColor;
      meterDot.style.backgroundColor = textColor;
    } else {
      body.style.backgroundColor = textColor;
      body.style.color = 'unset';
      meterPointer.style.backgroundColor = '';
      meterDot.style.backgroundColor = '';
    }
  };

  const createNoteElements = () => {
    const minOctave = 1;
    const maxOctave = 8;
    const noteStrings = [
      'C',
      'C♯',
      'D',
      'D♯',
      'E',
      'F',
      'F♯',
      'G',
      'G♯',
      'A',
      'A♯',
      'B',
    ];
    const notes = [];

    for (let octave = minOctave; octave <= maxOctave; octave++) {
      for (let n = 0; n < 12; n++) {
        const note = {
          name: noteStrings[n],
          value: 12 * (octave + 1) + n,
          octave: octave.toString(),
          frequency: getStandardFrequency(12 * (octave + 1) + n),
        };

        notes.push(note);
      }
    }

    return notes.map((note) => (
      <div
        key={note.value}
        className="note"
        data-name={note.name}
        data-value={note.value}
        data-octave={note.octave}
        data-frequency={note.frequency}
        onClick={() => handleNoteClick(note)}
      >
        {note.name[0]}
        <span className="note-sharp">{note.name[1] || ''}</span>
        <span className="note-octave">{note.octave}</span>
      </div>
    ));
  };

  const handleNoteClick = (note) => {
    const activeNote = document.querySelector('.note.active');

    if (activeNote === note) {
      tuner.stopOscillator();
      activeNote.classList.remove('active');
    } else {
      tuner.play(note.frequency);
      updateActiveNoteElement(note);
    }
  };

  const updateActiveNoteElement = (note) => {
    const activeNote = document.querySelector('.note.active');

    if (activeNote) {
      activeNote.classList.remove('active');
    }

    const noteElement = document.querySelector(
      `.note[data-value="${note.value}"]`
    );
    noteElement.classList.add('active');
  };

  const getStandardFrequency = (value) => {
    return Math.pow(2, (value - 69) / 12) * 440;
  };

  return (
    <div>
      <header>
        <h1>Tuner</h1>
      </header>

      <div className="note-container">{createNoteElements()}</div>

      <div className="meter">
        <div className="meter-dot"></div>
        <div className="meter-pointer"></div>
      </div>

      <div className="notes">
        <div className="notes-list"></div>
        <div className="frequency">
          <span className="note">-</span>
          <span className="cents">0</span>
          <span className="hertz">Hz</span>
        </div>
      </div>

      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" onClick={() => invertBackground()} />
          <span className="slider"></span>
        </label>
        <span className="invert-label">Invert</span>
      </div>

      <audio
        data-key="65"
        src="https://raw.githubusercontent.com/asifvora/react-piano/master/public/assets/C.mp3"
        onEnded={handleTransitionEnd}
      ></audio>
      <audio
        data-key="83"
        src="https://raw.githubusercontent.com/asifvora/react-piano/master/public/assets/D.mp3"
        onEnded={handleTransitionEnd}
      ></audio>
      <audio
        data-key="68"
        src="https://raw.githubusercontent.com/asifvora/react-piano/master/public/assets/E.mp3"
        onEnded={handleTransitionEnd}
      ></audio>
      <audio
        data-key="70"
        src="https://raw.githubusercontent.com/asifvora/react-piano/master/public/assets/F.mp3"
        onEnded={handleTransitionEnd}
      ></audio>
      <audio
        data-key="71"
        src="https://raw.githubusercontent.com/asifvora/react-piano/master/public/assets/G.mp3"
        onEnded={handleTransitionEnd}
      ></audio>
      <audio
        data-key="72"
        src="https://raw.githubusercontent.com/asifvora/react-piano/master/public/assets/A.mp3"
        onEnded={handleTransitionEnd}
      ></audio>
      <audio
        data-key="74"
        src="https://raw.githubusercontent.com/asifvora/react-piano/master/public/assets/B.mp3"
        onEnded={handleTransitionEnd}
      ></audio>
      <audio
        data-key="75"
        src="https://raw.githubusercontent.com/asifvora/react-piano/master/public/assets/C1.mp3"
        onEnded={handleTransitionEnd}
      ></audio>
    </div>
  );
};

export default TunerApp;
