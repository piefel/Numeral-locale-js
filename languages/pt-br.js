// numeral.js language configuration
// language : portuguese brazil (pt-br)
// author : Ramiro Varandas Jr : https://github.com/ramirovjr
(function () {
    this.numeral.locale('pt-BR', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'mil',
            million: 'milhões',
            billion: 'b',
            trillion: 't'
        }
    });
}());