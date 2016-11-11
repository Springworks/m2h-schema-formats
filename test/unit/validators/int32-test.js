import int32 from '../../../src/validators/int32';

describe('test/unit/validators/int32-test.js', () => {
  describe('the exported validator', () => {

    it('should return true for the minimum integer -2147483648', () => {
      int32(-2147483648).should.be.true();
    });

    it('should return false for one below the minimum integer of -2147483648', () => {
      int32(-2147483648 - 1).should.be.false();
    });

    it('should return true for the maximum integer 2147483647', () => {
      int32(2147483647).should.be.true();
    });

    it('should return false for one above the maximum integer of 2147483647', () => {
      int32(2147483647 + 1).should.be.false();
    });

    it('should return false for way above the maximum integer of 2147483647', () => {
      int32(2147483647 * 2).should.be.false();
    });

  });
});
