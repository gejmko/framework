import {Border} from '../../src/Style/Border';

test('BorderProvideStyle', () => {
    const borderStyle = new Border(1, 'black', 'solid');

    expect(borderStyle.getSize()).toBe(1);
    expect(borderStyle.getStyle()).toBe('solid');
    expect(borderStyle.getColor()).toBe('black');

    expect(borderStyle.stylize()).toBe('1px solid black');
});
