

module.exports = function(options){

  let configuration = Object.assign({

    bpm: 96, // Beats per minute
    bars: 4, // Bars (groups of beats)
    minutes:3, // Total minutes

    definition:[

      {percent:0, tags:{playing:true}},
      {percent:10, tags:{open:true}},
      {percent:30, tags:{dings:true}},
      {percent:60, tags:{rise:true}},
      {percent:70, tags:{drop:true, rise: false, open:false, voices:true}},
      {percent:90, tags:{resume:true, drop: false, ending:true, dings: false}},
      {percent:91, tags:{close:true, closing:true, voices:false}},
      {percent:100, tags:{playing:false}},

    ]

  }, options);

  let generated = [];

      let beats = configuration.bpm * configuration.minutes;
      let bars = configuration.bars;
      let bar = 0;

      for ( let beat = 0; beat <= beats; beat ++ ){

        let phase = '';
        bar++;
        if (bar>=bars) bar=0;

        const songPercent = (beat * 100 / beats)|0;
        const barPercent = (bar * 100 / bars)|0;

        const state = {};

        // loop up to current songPercent

        configuration.definition.forEach(defined=>{
          if(defined.percent<=songPercent){
            Object.keys(defined.tags).forEach(key=>{
              state[key] = defined.tags[key];
            })
          }
        })

        const tags = Object.keys(state).filter(i=>state[i]);
        generated.push({beats, beat, bars, bar, barPercent, songPercent, tags });

  }

  return generated;

}
