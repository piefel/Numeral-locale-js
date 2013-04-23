// numeral.js language configuration
// language : japanese
// author : teppeis : https://github.com/teppeis
(function () {
    this.numeral.locale('ja', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: '千',
            million: '百万',
            billion: '十億',
            trillion: '兆'
        }
    });
}());
