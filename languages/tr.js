// numeral.js language configuration
// language : turkish (tr)
// author : Ecmel Ercan : https://github.com/ecmel
//          Erhan Gundogan : https://github.com/erhangundogan,
//          Burak Yiğit Kaya: https://github.com/BYK

(function () {
    this.numeral.locale('tr', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'bin',
            million: 'milyon',
            billion: 'milyar',
            trillion: 'trilyon'
        }
    });
}());
