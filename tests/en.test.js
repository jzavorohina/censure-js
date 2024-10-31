var { Censure } = require('../censure');
var { patterns_en } = require('../patterns/patterns_en');

function testFix(imputText, isBadExpexted, textExpected) {
    expect(Censure.isBad(imputText)).toBe(isBadExpexted);
    expect(Censure.replace(imputText)).toBe(textExpected);
}

test('English bad words', () => {
    var testPatterns = patterns_en;

    for (var p of testPatterns){
        var testEnding = 'es';
        var replace = ', ';
        var a = p.replace(new RegExp('\\[a-z\\]\\+|\\[A-Z\\]\\+', 'iug'), testEnding);
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