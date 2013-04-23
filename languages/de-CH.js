// numeral.js language configuration
// language : German in Switzerland (de-CH)
// author : Michael Piefel : https://github.com/piefel (based on work from Marco Krage : https://github.com/sinky)
(function () {
    this.numeral.language('de-CH', {
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