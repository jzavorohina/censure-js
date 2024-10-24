var { Censure } = require('../censure');

test('Mix bad words', () => {
    var input = 'Ass - это задница, жопа';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('*** - это задница, ***');

    input = 'Анальная, анус, анусе, ass / arse, asshole / arsehole';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, *** / ***, *** / ***');

});