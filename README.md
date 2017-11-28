# beatnik
Flexible Musical Beat Stream Generator

## Install

    npm i beatnik

## Usage

```JavaScript

// Require Library
const beatnik = require('beatnik');

// Configure Stream
const Beatnik = beatnik({
  bpm: 96,
  minutes:5,

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

```

## Data

beat <space> percent <space> state
