// numeral.js language configuration
// language : french (fr)
// author : Adam Draper : https://github.com/adamwdraper
(function () {
    this.numeral.locale('fr', {
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