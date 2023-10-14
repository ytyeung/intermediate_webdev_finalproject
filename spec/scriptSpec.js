const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../src/script');

describe("Interest Rate Calculator Tests", () => {
    it("should be able to Calculate Simple Interest", function () {
        expect(calculateSimpleInterest(1000, 5, 1)).toEqual(50);
      });

      it("should be able to Calculate Simple Interest", function () {
        expect(calculateTotalPayableAmount(1000, 50)).toEqual(1050);
      });
    
})