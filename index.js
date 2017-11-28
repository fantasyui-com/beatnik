const { Readable } = require('stream');

module.exports = function(options){

  let configuration = Object.assign({
    bpm: 96,
    minutes:5,

    open:10,
    rise:60,
    drop:70,
    resume:90,
    close:91,

  },options);

  class Beatnik extends Readable {

    constructor(opt) {
      super(opt);

      this._max = configuration.bpm * configuration.minutes;
      this._index = 1;

      // Logic Here

    }

    _read() {
      const i = this._index++;
      if (i > this._max)
        this.push(null);
      else {

        let bt = i;

        const musicPercent = this._index * 100 / this._max;


        if(  musicPercent => configuration.close ){
          bt = 'close';
        }

        if( musicPercent < configuration.resume ){
          bt = 'resume';
        }

        if( musicPercent < configuration.drop ){
          bt = 'drop';
        }

        if( musicPercent < configuration.rise ){
          bt = 'rise';
        }

        if( musicPercent < configuration.open ){
          bt = 'open';
        }



        const str = this._index + ' ' + (musicPercent|0) + ' ' + bt;



        const buf = Buffer.from(str, 'ascii');
        this.push(buf);
      }
    }
  }

  return Beatnik;

}
