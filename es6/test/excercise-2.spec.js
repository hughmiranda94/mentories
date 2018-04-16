// Import from '../public/src/excercise-2';

describe('Destructuring I, Bias', () => {
    it('Destructuring an array', () => {
        expect(one).toBe(_array[0]);
        expect(two).toBe(_array[1]);
        expect(three).toBe(_array[2]);
        expect(four).toBe(_array[3]);
        expect(five).toBe(_array[4]);
    });
    it('Destructuring an object', () => {
        expect(one).toBe(_object.one);
        expect(two).toBe(_object.two);
        expect(three).toBe(_object.three);
        expect(four).toBe(_object.four);
        expect(five).toBe(_object.five);
    });
    it('Destructuring an object with alias', () => {
        expect(aliasOne).toBe(_object.one);
        expect(aliasTwo).toBe(_object.two);
        expect(aliasThree).toBe(_object.three);
        expect(aliasFour).toBe(_object.four);
        expect(aliasFive).toBe(_object.five);
    });
    it('Destructuring in base a key', () => {
        for (let key of Object.keys(_object)) {
            

            expect(foo).toBe(_object[key])
        }

    });

});
