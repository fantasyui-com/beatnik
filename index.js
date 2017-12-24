

module.exports = function(options){

  let configuration = Object.assign({
    bpm: 96,
    bars: 8,
    minutes:5,

    open:10,
    rise:60,
    drop:70,
    resume:90,
    close:91,

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


        if(  songPercent => configuration.close ){
          phase = 'close';
        }

        if( songPercent < configuration.resume ){
          phase = 'resume';
        }

        if( songPercent < configuration.drop ){
          phase = 'drop';
        }

        if( songPercent < configuration.rise ){
          phase = 'rise';
        }

        if( songPercent < configuration.open ){
          phase = 'open';
        }

        generated.push({beats, beat, bars, bar, barPercent, songPercent, phase});

  }

  return generated;

}
