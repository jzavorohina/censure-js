var { Censure } = require('../censure');
var { patterns_ru } = require('../patterns/patterns_ru');

function testFix(imputText, isBadExpexted, textExpected) {
    expect(Censure.isBad(imputText)).toBe(isBadExpexted);
    expect(Censure.replace(imputText)).toBe(textExpected);
}

test('Russian bad words', () => {
    var testPatterns = patterns_ru;

    for (var p of testPatterns){
        var testEnding = 'ились';
        var replace = ', ';
        var a = p.replace(new RegExp('\\[а-я\\]\\+|\\[а-яё\\]\\+', 'iug'), testEnding);
        var testLine = a.replace(new RegExp('\\|', 'iug'), replace);
        var words = testLine.split(replace);
        var expectedArr = [];

        for (var a = 0; a < words.length; a++) {
            expectedArr.push('***');
        }

        var expected = expectedArr.join(replace);

        testFix(testLine, true, expected);
    }

});