// numeral.js language configuration
// language : Finnish
// author : Sami Saada : https://github.com/samitheberber
(function () {
    this.numeral.language('fi', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'M',
            billion: 'G',
            trillion: 'T'
        }
    });
}());
