// numeral.js language configuration
// language : danish denmark (dk)
// author : Michael Storgaard : https://github.com/mstorgaard
(function () {
    this.numeral.locale('da', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mio',
            billion: 'mia',
            trillion: 'b'
        }
    });
}());