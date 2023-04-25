const { soma, subtracao } = require('./TDD.js')

describe('math functions', () => {
    it('soma 2 numbers', () => {
        expect(soma(1, 2)).toBe(3);
    })
    it('subtrair 2 numbers', () => {
        expect(subtracao(5, 5)).toBe(0);
    })
});