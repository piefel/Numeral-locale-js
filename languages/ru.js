// numeral.js language configuration
// language : russian (ru)
// author : Anatoli Papirovski : https://github.com/apapirovski
(function () {
    this.numeral.language('ru', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'тыс.',
            million: 'млн',
            billion: 'b',
            trillion: 't'
        }
    });
}());
