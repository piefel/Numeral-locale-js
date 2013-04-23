// numeral.js language configuration
// language : czech (cs)
// author : Anatoli Papirovski : https://github.com/apapirovski
(function () {
    this.numeral.language('cs', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'tis.',
            million: 'mil.',
            billion: 'b',
            trillion: 't'
        }
    });

}());
