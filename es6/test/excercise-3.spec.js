//import ... from '../public/src/excercise-3';


describe('Object literals, Bias', () => {
    it('Object literals for properties', () => {
        let { a, b, c, d, e } = foo;
        expect(a).toEqual(1);
        expect(b).toEqual(true);
        expect(c).toEqual('');
        expect(d).toEqual([]);
        expect(e).toEqual({});
    });
    it('Object literals for return values on functions', () => {
        let { x, y } = bar;
        
        spyOn(bar, 'x').and.returnValue(1);
        
        let a = 1, b = 2, c = 3;
        spyOn(bar, 'y').and.returnValue({ a, b, c})
    });
    it('Object literals for key indexes', () => {
        let { dummy }  = xfz;

        [true, '', 1, [], {}].forEach(item => {
            let x = dummy('key', item);
            expect(x['key']).toEqual(item);
        });
        
        
        let fn = function () {};
        let y = 1, z = 0;
        let x = dummy('key', fn, {y, z});
        expect(x()).toEqual({ y, z });
    })
});
