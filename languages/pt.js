// numeral.js language configuration
// language : portuguese (pt-pt)
// author : Diogo Resende : https://github.com/dresende
(function () {
    this.numeral.locale('pt', {
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
