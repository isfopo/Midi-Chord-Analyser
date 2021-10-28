const max = require("max-api");
const tonal = require("tonal");
const s11 = require("sharp11")

max.addHandler("detect", (...notes) => {
  const namedNotes = notes.map(tonal.Note.fromMidi);
  max.post(namedNotes);
  if (namedNotes.length > 2) {
    max.outlet("chord", s11.chord.identify(...namedNotes));
  } else {
    max.outlet("chord", "null");
  }
});