const chai = require('chai');
const expect = chai.expect;

const range = require('../dist/');

describe('Test error conditions', () => {

    describe('a. should return [start] if end is omitted', () => {

        it('should return the correct value for the invalid range(1)', () => {
            const res = range(1);
            expect(res).to.be.deep.equal([1])
        })
    })

    describe('b. should return [start] if start and end are the same value', () => {

        it('should return the correct value for the invalid range(1,1)', () => {
            const res = range(1, 1);
            expect(res).to.be.deep.equal([1])
        })
    })

    describe('c. should throw a RangeError if start and end are of different types', () => {

        it('should throw an error when invalid range("a", 2) is called', () => {
            expect(() => range('a', 2)).to.throw(RangeError, 'Invalid args for range: \'a\'')
        })
    })

    describe('d. should throw a RangeError is step is less than 0', () => {

        it('should throw an error when invalid step is called for range(1,10,-2)', () => {
            expect(() => range(1, 10, -2)).to.throw(RangeError, 'Invalid args for range: -2')
        })
    })
})