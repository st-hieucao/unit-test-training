import { isAscendingArr } from '../app/core/helpers/array';

describe('ascending array', () => {
  describe('not ascending array', () => {
    describe('check array length < 2', () => {
      test('is array has length < 2 should return false', () => {
        expect(isAscendingArr([])).toBe(false);
        expect(isAscendingArr([0])).toBe(false);
      });
    })

    describe('check array is not ascending', () => {
      test('array has item is null or undefined', () => {
        expect(isAscendingArr([1, undefined, 2])).toBe(false);
        expect(isAscendingArr([1, null, 2])).toBe(false);
      });

      test('check array has all item is number but not ascending', () => {
        expect(isAscendingArr([1, 3, 2])).toBe(false);
        expect(isAscendingArr([2, 1.5, 1])).toBe(false);
        expect(isAscendingArr([3, 2, 1])).toBe(false);
      });
    });
  });

  describe ('array is ascending', () => {
    test('check array has some duplicated item', () => {
      expect(isAscendingArr([1, 1])).toBe(true);
      expect(isAscendingArr([2, 2, 2, 2])).toBe(true);
      expect(isAscendingArr([1.2, 1.2, 1.2, 1.2])).toBe(true);
      expect(isAscendingArr([-3, -3, -3, -3])).toBe(true);
    });
    
    test('check array has different item and ascending', () => {
      expect(isAscendingArr([1, 1, 1])).toBe(true);
      expect(isAscendingArr([1, 2, 3])).toBe(true);
      expect(isAscendingArr([-1, 0, 1])).toBe(true);
      expect(isAscendingArr([-3, -2, -1])).toBe(true);
      expect(isAscendingArr([1.1, 1.2, 1.3])).toBe(true);
    });
  });
});
