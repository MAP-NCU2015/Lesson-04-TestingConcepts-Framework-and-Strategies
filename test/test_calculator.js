var assert = require('assert');
var cal = require('../calculator.js');
var sinon = require('sinon');

describe('Calculator', function() {
            it('add', function() {
                assert.equal('2', cal.add(1, 1));
            })
            it('substract', function() {
                assert.equal('10', cal.substract(34.4, 24.4));
            })
            it('multi', function() {
                assert.equal('8', cal.multi(0.8, 10));
            })
            it('divide', function() {
                assert.equal('7', cal.divide(28, 4));
            })
    })
describe('Negative Path', function() {
    it('generates an false', function() {
        assert.equal(false, cal.isNumber('1DA'));
    })
})
describe('Sinon', function() {
    it('stubbing add function', function() {
		var stub = sinon.stub().returns(42);
		var proxy = cal.multi(stub(), 5);
			
		assert.equal(210, proxy);
    })
})