var { Censure } = require('../censure');

test('Replace all bad words', () => {
    var input = 'Это пиздёж!';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Это ложь!');

    input = 'Я те говорил, она на всю башку пизданутая!';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Я те говорил, она на всю башку глупая!');

    input = 'Пиздатый фильм.';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Хорошего качества фильм.');

    input = 'Пиздато говоришь.';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Хорошо говоришь.');

    input = 'Как только услышит Таня слово ***, так начинает пизденеть.';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Как только услышит Таня слово ***, так начинает балдеть.');

    input = 'Только если перестанет пиздеть.';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Только если перестанет болтать чепуху.');

    input = 'Вы собираетесь отменить этот пиздецовый карнавал?';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Вы собираетесь отменить этот хороший карнавал?');

    input = 'Увижу вас еще раз — пиздец вам, ребята.';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Увижу вас еще раз — конец вам, ребята.');

    input = 'Пиздоболивать могут часами.';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Говаривать могут часами.');

    input = 'Хорош пиздоболить, пора за работу приниматься.';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Хорош болтать, пора за работу приниматься.');

    input = 'С культурой в стране хуевато.';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('С культурой в стране плоховато.');

    input = 'Но план был хуеватый.';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Но план был плоховатый.');

    input = 'Хуёво греют батареи!';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Плохо греют батареи!');

    input = 'И человек он хуёвый, и поэт так себе.';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('И человек он плохой, и поэт так себе.');

    input = 'Такая вот хуёвина приключилась.';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Такая вот ерунда приключилась.');

    input = 'Какая забавная хуёвинка на днях произошла.';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Какая забавная неприятность на днях произошла.');

    input = 'Пока навели порядок, хуё-моё — и день прошёл!';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Пока навели порядок, то да сё — и день прошёл!');

    input = 'А вот хуеньки!';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('А вот нет!');

    input = 'Это что за хуета!';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Это что за халтура!');

    input = 'Ялдометр';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.fix(input)).toBe('Мужской половой орган большого размера');

});