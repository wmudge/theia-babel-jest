import { MyClass } from './my_class';

var bar = new MyClass("BAR!");

test('Example test', () => {
    expect(bar.say()).toBe("BAR!");
});