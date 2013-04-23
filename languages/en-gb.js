// numeral.js language configuration
// language : english united kingdom (uk)
// author : Dan Ristic : https://github.com/dristic
(function () {
    this.numeral.language('en-GB', {
        delimiters: {
            thousands: ',',
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