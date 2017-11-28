

const beatnik = require('./index.js')

// Configure Stream
const Beatnik = beatnik({
  bpm: 96,
  minutes:3,

  open:10,
  rise:60,
  drop:70,
  resume:90,
  close:91,
});

// Create Readable Beat Stream.
const beats = new Beatnik();

beats.on('readable', () => {
  let chunk;
  while (null !== (chunk = beats.read())) {
    console.log(`Received "${chunk}", ${chunk.length} bytes of data.`);
  }
});
