// numeral.js language configuration
// language : spanish
// author : Hernan Garcia : https://github.com/hgarcia
(function () {
    this.numeral.locale('es', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mm',
            billion: 'b',
            trillion: 't'
        }
    });
}());
