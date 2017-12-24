

const beatnik = require('./index.js')

// Configure Stream
const beats = beatnik({
  bpm: 96, // Beats per minute
  bars: 16, // Bars (groups of beats)
  minutes:3, // Total minutes

  // Percentages where kinds of song segment start

  states:{

    {percent:10, tags:{open:true,playing:true}},
    {percent:30, tags:{dings:true}},
    {percent:60, tags:{rise:true,}},
    {percent:70, tags:{drop:true, rise: false, open:false}},
    {percent:90, tags:{resume:true, drop: false, ending:true}},
    {percent:91, tags:{close:true,closing:true, playing:false}},

  }

});

beats.forEach( chunk => {
    console.log( chunk );
});
