const { reverseString } = require('./helper.js');

describe('Jest', () => {
    test('Jest runs', () => {

    });
})

describe('reverseString', () => {
    beforeEach(() => {
        console.log('running');
    })

    it('uses matcher correctly', () => {
        expect(2+2).toBe(4);
    
        const obj1 = { name: 'Jasmine', school: { name: 'lambda' } };
        const obj2 = { name: 'Jasmine', school: { name: 'lambda' } };
    
        // expect(obj1).toBe(obj2); //  false, checks for the same reference
        expect(obj1).toEqual(obj2); // true, check for equality (deep)
    })

    test('returns a string', () => {
        // Arange: setup the world
        const input = 'kam';
    
        // Act: execute the code you're testing
        const result = reverseString(input);
    
        // Assert: check that it works
        expect(typeof result === 'string').toBeTruthy();
    
    })
    
    test('reverses properly', () => {
        // Arrange
        const input = 'tops';
        const expected = 'spot';
    
        // Act
        const actual = reverseString(input);
        expect(actual).toBe(expected);
    });
    
    test('reverses properly with spaces', () => {
        // Arrange
        const input = 'to ps';
        const expected = 'sp ot';
    
        // Act
        const actual = reverseString(input);
        expect(actual).toBe(expected);
    });

    test('throws an error if given non-string', () => {
        expect(() => reverseString(['hello'])).toThrow();
    })
})

// Pre-Test //

// 1. (pre-test) Summarize what your function does
// 2. (pre-test) Write function signature

// Tests //

// 1. Get red - write test, have it fail
// 2. Get green - fix thing that's getting tested, have it pass
// 3. Refactor - optional, make it better, keep it green