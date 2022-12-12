var { Censure } = require('../censure');

test('Russian bad words', () => {
    var input = 'Анальная';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***');

    input = 'Анальная, анус, анусе';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***');

    input = 'Бздун, бздит, бля, блядская, блядь';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***');

    input = 'Вафел, вафлер / вафлЁр, вафлерка / вафлёрка, вафлеглот, вафлист, вафлили, вафлисткие вафли';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, *** / ***, *** / ***, ***, ***, ***, *** вафли');

    input = 'Вмандиться, вмандякаться, вмандячиться, вмандохаться, вмандошиться, вмандяшиться, вмандяхаться, вмандюриться, вмандяриться, вмудохаться';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Вошка, ядрена вошь, мондавошка, впендюривали, впизду / в пизду, вздрочнул / вздрачил';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, *** ***, ***, ***, *** / в ***, *** / ***');

    input = 'Впиздрониться, впиздячиться, впиздюриться, впиздохаться, впиздошиться, впиздюлиться, впиздяриться, впиздюхаться, впиздяхаться, впиздяшиться';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Вхуяриться, вхуякаться, вхуячиться, вхуйнуться';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***');

    input = 'Въебаться, въебениться, въебёхаться / въебехаться, въебуриться, в ебеню феню';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, *** / ***, ***, в *** феню');

    input = 'Высер, мегавысер';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***');

    input = 'Говном, говно-люди, говна, говница, говенных, говнище, говенный';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***');

    input = 'Голощелка, гомик, гомиков, гомосятина, гондон, гумозник';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***');

    input = 'Давалка, даваха, дерьмовая, дилдо, додик, доебизм, дойки, долбаная, долбежка, долбоебов';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Допиздишься, дососать, досасывая, доснашиваясь, досношаться, досикать, досикивать, досирать, доусеру, доусрачки';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Дристополет, обдристать, дрочка, драчильня, задрочили, дрючить, дуплиться';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***');

    input = 'Ебанько, ебеня, ебеня, еблан, ебнутая, ерепениться, eдрёная, едрить, ерундовая, ёбнутая';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Жид, жидовская, жопа, жопянная, жопник, жопочник, жопошник';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***');

    input = 'Забулдыга, загадить, зад, задница, задрот, задротище, заноза, зануда, зараза';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Засранец, засранка, засеря, затычка';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***');

    input = 'Идиот, идиотка, измандякаться, йух';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***');

    input = 'Карга, клитор, кобель, кобелина, кретин, курва';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***');

    input = 'Лох, лохушка, лахудра, легавый, лупоглазый';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***');

    input = 'Мандавошка, манда, монда, мондавошка, маразматик, мегера, мент, мерзавец, мразь';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Мудак, мудило, мудила, мудозвон, мудохаться';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***');

    input = 'Наёбка, наебали, ничтожество';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***');

    input = 'Обалдуй, обосранец, обосраться, образина, остолоп, отребье, отрепье, отродье, охуенчик';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Падаль, падла, паскуда, паскудный, потаскуха, паразит, пентюх, перечница, пиздатая, пизда';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Подонок, подстилка, позорник, порнуха, полудурок, потаскун, потаскуха, придурок, прихвостень, прорва';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Пройдоха, проститутка, прохвост, прохиндей, проходимец, пустобрёх, пустозвон, пустомеля, пьянчуга, пьянь';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Разъебать, раздолбай, распиздяйство, рвань, ренегат, рогоносец';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***');

    input = 'Сброд, сволочь, соси, сосать, срать, ссать, стерва, сука, сукин, сучка';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Тварь, тёлка, толстозадый, тошнотворное, трахать, трепотня, тряпка, тупица, тупоголовый, туполобый, тупоумный, тягомотину';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Ублюдок, ублюдошный, уебан, уебище, урод, уродка';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***');

    input = 'Фаллос, фефела, фефёла, фефёлка, фофан, фуфло, фуфлогон';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***');

    input = 'Хайло, халда, нахера, хлюст, хмырь, холуй, холуйство, холуйствуют, хрен, хреновина, хрыч';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Хуй, хуя, дохуя, охуеть, хуле, хуяк-хуяк, хуярить, хуячить';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Целка, черножопый, чернозадый, черномазый, чинодрал, чмо, чурбан, чучело';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Шалава, шалашовка, шантрапа, шаромыжник, шваль, шизоид, шлюха, шлюшка, шушера';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***, ***, ***');

    input = 'Щекотильник, эрекция, юлда, юлдак, ядрёна, ядрена, ядрить';
    expect(Censure.isBad(input)).toBe(true);
    expect(Censure.replace(input)).toBe('***, ***, ***, ***, ***, ***, ***');

});