var { Censure } = require('../censure');

test('English bad words', () => {
    var input = 'Ass';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***');

    input = 'Ass / arse, asshole / arsehole';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('*** / ***, *** / ***');

    input = 'Bastard, berk, bitch / bitching, blighter, blimey, bollocks, bugger, bullshit, butt';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, *** / ***, ***, ***, ***, ***, ***, ***');

    input = 'Cad, cock / poppycock / cocksucker, crap, cunt';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, *** / *** / ***, ***, ***');

    input = 'Damn, dang, darn, douchebag, dick / dickhead, duffer, dumd';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, *** / ***, ***, ***');

    input = 'Faggot / fag, fool, freak / freaking, fuck / motherfucker / fucking / fucked';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('*** / ***, ***, *** / ***, *** / *** / *** / ***');

    input = 'Gay';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***');

    input = 'Hoe, homo, heck';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***');

    input = 'Idiot';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***');

    input = 'Jerk / jerking';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('*** / ***');

    input = 'Knobend';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***');

    input = 'Loser';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***');

    input = 'Motherfucker';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***');

    input = 'Nerd, nigger';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***');

    input = 'Pillock, plonker, poo / poop, prat, prick, pussy';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, *** / ***, ***, ***, ***');

    input = 'Rotter';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***');

    input = 'Shit / shits / bullshit / shitting / ballshitter, slut, stupid, suck / sucker, swive / swivel, swine';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('*** / *** / *** / *** / ***, ***, ***, *** / ***, *** / ***, ***');

    input = 'Twat';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***');

    input = 'Wanker, whore';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***');

});