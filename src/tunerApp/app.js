import React, { useEffect, useState } from 'react';
import Tuner from './Tuner';
import Meter from './Meter';
import FrequencyBars from './FrequencyBars';
import Notes from './Notes';

const Application = () => {
  const [a4, setA4] = useState(parseInt(localStorage.getItem('a4')) || 440);
  const [tuner, setTuner] = useState(null);
  const [notes, setNotes] = useState(null);
  const [meter, setMeter] = useState(null);

  useEffect(() => {
    const initA4 = () => {
      setA4(parseInt(localStorage.getItem('a4')) || 440);
    };

    initA4();

    const handleNoteDetected = (note) => {
      if (notes && notes.isAutoMode) {
        notes.update(note);
      }
      let deg = Math.round((note.cents / 250) * 45);
      meter.update(deg);
    };

    const start = async () => {
      const tunerInstance = new Tuner(a4);
      await tunerInstance.init();

      setTuner(tunerInstance);
      setNotes(new Notes(tunerInstance));
      setMeter(new Meter());
    };

    swal
      .fire({
        title: 'Please allow access to the microphone!',
        allowOutsideClick: false,
      })
      .then(() => {
        start();
      });

    return () => {
      if (tuner) {
        tuner.stop();
      }
    };
  }, [a4]);

  return (
    <>
      {tuner && (
        <>
          <FrequencyBars tuner={tuner} />
          <div className="meter">
            <div className="meter-dot" />
            <div className="meter-pointer" />
          </div>
          {notes && <div className="notes">{notes.render()}</div>}
          <div className="a4">A<sub>4</sub> = {a4} Hz</div>
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Application />
    </div>
  );
};

export default App;
