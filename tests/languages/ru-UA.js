module('Language: ru-UA', {
    setup: function() {
        numeral.language('ru-UA');
    }
});

// Numbers -----------------------
test('Format Numbers', 12, function() {
    var tests = [
        [10000,'0,0.0000','10 000,0000'],
        [10000.23,'0,0','10 000'],
        [-10000,'0,0.0','-10 000,0'],
        [10000.1234,'0.000','10000,123'],
        [-10000,'(0,0.0000)','(10 000,0000)'],
        [-.23,'.00','-,23'],
        [-.23,'(.00)','(,23)'],
        [.23,'0.00000','0,23000'],
        [1230974,'0.0a','1,2млн'],
        [1460,'0a','1тыс.'],
        [-104000,'0a','-104тыс.'],
        [1,'0[.]0','1']
    ];

    for (var i = 0; i < tests.length; i++) {
        strictEqual(numeral(tests[i][0]).format(tests[i][1]), tests[i][2], tests[i][1]);
    }
});

// Percentages -----------------------
test('Format Percentages', 4, function() {
    var tests = [
        [1,'0%','100%'],
        [.974878234,'0.000%','97,488%'],
        [-.43,'0%','-43%'],
        [.43,'(0.000%)','43,000%']
    ];

    for (var i = 0; i < tests.length; i++) {
        strictEqual(numeral(tests[i][0]).format(tests[i][1]), tests[i][2], tests[i][1]);
    }
});
