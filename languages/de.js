// numeral.js language configuration
// language : German (de) – generally useful in Germany, Austria, Luxembourg, Belgium
// author : Marco Krage : https://github.com/sinky
(function () {
    this.numeral.language('de', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        }
    });
}());