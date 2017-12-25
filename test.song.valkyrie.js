

const beatnik = require('./index.js')

// Configure Stream
const beats = beatnik({
  title: 'Valkyrie',
  author: 'MC Meow',

  bpm: 200, // Beats per minute
  bars: 8, // Bars (groups of beats)
  minutes:3, // Total minutes

  definition:[

    {percent:0,   tags:{playing:true}},
    {percent:10,  tags:{open:true}},
    {percent:30,  tags:{dings:true}},
    {percent:60,  tags:{rise:true}},
    {percent:70,  tags:{drop:true, rise: false, open:false, voices:true}},
    {percent:90,  tags:{resume:true, drop: false, ending:true, dings: false}},
    {percent:91,  tags:{close:true, closing:true, voices:false}},
    {percent:100, tags:{playing:false}},

  ]

});

// beats.forEach( chunk => console.log(JSON.stringify(chunk)) );
console.log( JSON.stringify(beats, null, '  ') );
