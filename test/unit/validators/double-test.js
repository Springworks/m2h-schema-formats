import double from '../../../src/validators/double';

// Note: these tests don't help with values that are not double as we
// are still testing with JavaScript where all numeric types are doubles
// These are mostly sanity checks

// JSON disallows NaN, Inf and -Inf
// so we fail on them to prevent generating them
// since they are converted to null by Node

describe('test/unit/validators/double-test.js', () => {
  describe('the exported validator', () => {

    it('should return true 0', () => {
      double(0).should.be.true();
    });

    it('should return false for null', () => {
      double(null).should.be.false();
    });

    it('should return false for a string', () => {
      double('0.0').should.be.false();
    });

    it('should return false for an object', () => {
      double({}).should.be.false();
    });

    it('should return false for an array', () => {
      double([]).should.be.false();
    });

    it('should return false for a date', () => {
      double(new Date()).should.be.false();
    });

    it('should return false for NaN', () => {
      double(NaN).should.be.false();
    });

    it('should return false for Infinity', () => {
      double(Infinity).should.be.false();
    });

    it('should return false for -Infinity', () => {
      double(-Infinity).should.be.false();
    });

    it('should return true for -Infinity', () => {
      double(-Infinity).should.be.false();
    });

    it('should return true for maximum IEEE 754 double', () => {
      const max_double = Math.pow(2, 1023) * (1 + (1 - Math.pow(2, -52)));
      double(max_double).should.be.true();
    });

    it('should return true for min IEEE 754 double', () => {
      double(1.0000000000000002).should.be.true();
    });

  });
});
