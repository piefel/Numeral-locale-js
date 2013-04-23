// numeral.js language configuration
// language : italian Italy (it)
// author : Giacomo Trombi : http://cinquepunti.it
(function () {
    this.numeral.language('it', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'mila',
            million: 'mil',
            billion: 'b',
            trillion: 't'
        }
    });
}());