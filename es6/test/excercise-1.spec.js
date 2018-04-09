// Import from '../public/src/excercise-1';


describe('Excercise 1. (see excercise-1.md', () => {
    it('Import all components from a file', () => {
        expect(foo.fn1).toBeDefined();
        expect(foo.fn2).toBeDefined();
        expect(foo.fn3).toBeDefined();
        expect(foo.fn4).toBeDefined();
        expect(foo.fn5).toBeDefined();
    });
    it('Import particular component from a file', () => {
        expect(fn1).toBeDefined();
    })
    it('Import particular components from a file', () => {
        expect(fn2).toBeDefined();
        expect(fn3).toBeDefined();
        expect(fn4).toBeDefined();
        expect(fn5).toBeDefined();
    })
    it('Import default component from a file', () => {
        expect(bar).toBeDefined();
    });
    it('Import default and particular component(s) from a file', () => {
        expect(bar).toBeDefined();
        expect(foo.fn1).toBeDefined();
        expect(foo.fn2).toBeDefined();
        expect(foo.fn3).toBeDefined();
        expect(foo.fn4).toBeDefined();
        expect(foo.fn5).toBeDefined();
    });
    it('Import a file with side effects', () => {
        expect(document.cookie).toContain('invoked=true');
    });
    it('Import a file(s) assigning an alias to current instance', () => {
        expect(fnAlias1).toBeDefined();
        expect(fnAlias1).toBe(fn1);

        expect(fnAlias2).toBeDefined();
        expect(fnAlias2).toBe(fn2);

        expect(fnAlias3).toBeDefined();
        expect(fnAlias3).toBe(fn3);
        
        expect(fnAlias4).toBeDefined();
        expect(fnAlias4).toBe(fn4);
        
        expect(fnAlias5).toBeDefined();
        expect(fnAlias5).toBe(fn5);

    });
})