var { Censure } = require('../censure');
var { patterns_ru } = require('../patterns/patterns_ru');
var { patterns_en } = require('../patterns/patterns_en');

function testFix(imputText, isBadExpexted, textExpected) {
    expect(Censure.isBad(imputText)).toBe(isBadExpexted);
    expect(Censure.replace(imputText)).toBe(textExpected);
}

test('Mix bad words', () => {
    var testPatterns = patterns_ru;
    var testPatterns = patterns_en;

    for (var p of testPatterns){

        var testEnding = '';
        var validWords = '';

        if (p.match("\\[а-я\\]\\+|\\[а-яё\\]\\+/iug")) {
            var testEnding = 'ились';
            var validWords = ['это','задница','слово','парк','табуретка','экран','шуфлядка'];
        } else if (p.match("\\[a-z\\]\\+|\\[A-Z\\]\\+/iug")){
            var testEnding = 'es';
            var validWords = ['feet','food','ice','sun','moon','zero','date'];
        }

        
        var replace = ', ';
        var a = p.replace(new RegExp('\\[а-я\\]\\+|\\[а-яё\\]\\+|\\[a-z\\]\\+|\\[A-Z\\]\\+', 'iug'), testEnding);
        var testLine = a.replace(new RegExp('\\|', 'iug'), replace);
        var words = testLine.split(replace);
        var expectedArr = [];
        var testArr = [];

        for (var a = 0; a < words.length; a++) {
            if(a % 2 === 0) {
                testArr.push(validWords[a]);
                expectedArr.push(validWords[a]);
            }
            testArr.push(words[a]);
            expectedArr.push('***');
        }
        var test = testArr.join(replace);
        var expected = expectedArr.join(replace);

        testFix(test, true, expected);
    }
});