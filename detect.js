const max = require("max-api");
const tonal = require("tonal");
const tonalDetect = require("tonal-detect");

max.addHandler("detect", (...notes) => {
  const chords = tonalDetect.chord(notes.map(tonal.Note.fromMidi));
  if (chords && chords.length > 0) {
    max.outlet("chords", ...chords);
  } else {
    max.outlet("chords", "null");
  }
});