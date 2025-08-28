// Create the AudioContext once, outside the component, to avoid recreating it on every render.
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

export const playBellSound = () => {
    const now = audioContext.currentTime;
    const fundamental = 392; // Frequency of G4 note
    const decayTime = 4; // How long the bell sound lasts

    // Node to control the overall volume and create the bell's decay envelope
    const masterGain = audioContext.createGain();
    masterGain.connect(audioContext.destination);

    // Set the "hit and fade" envelope of the bell
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(0.5, now + 0.01); // Quick attack
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + decayTime); // Natural decay

    // A bell sound consists of multiple frequencies (partials)
    const partials = [1, 2, 3.01, 4.17, 5.44, 6.79];

    partials.forEach(partial => {
      const osc = audioContext.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = fundamental * partial; // Set frequency for each partial
      osc.connect(masterGain);

      // Start and stop each oscillator
      osc.start(now);
      osc.stop(now + decayTime);
    });
  };