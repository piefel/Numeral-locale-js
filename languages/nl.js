// numeral.js language configuration
// language : belgium-dutch (be-nl)
// author : Dieter Luypaert : https://github.com/moeriki
(function () {
    this.numeral.language('nl', {
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