// numeral.js language configuration
// language : french (fr-ch)
// author : Adam Draper : https://github.com/adamwdraper
(function () {
    this.numeral.language('fr-CH', {
        delimiters: {
            thousands: '\'',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        }
    });
}());
