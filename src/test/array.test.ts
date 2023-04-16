import { isAscendingArr } from '../app/core/helpers/array';

describe ('array', () => {
  describe('check ascending sorted number', () => {
    test('arr is [1, 2, 3]', () => {
      const result = isAscendingArr([1, 2, 3]);
      expect(result).toBeTruthy();
    });

    test('arr is [1, 2, 2, 3]', () => {
      const result = isAscendingArr([1, 2, 2, 3]);
      expect(result).toBeTruthy();
    });

    test('arr is [-1, 2, 3]', () => {
      const result = isAscendingArr([-1, 2, 3]);
      expect(result).toBeTruthy();
    });

    test('arr is [1, 2.2, 2.3]', () => {
      const result = isAscendingArr([1, 2.2, 2.3]);
      expect(result).toBeTruthy();
    });

    test('arr is [1, 2e3, 2e4]', () => {
      const result = isAscendingArr([1, 2e3, 2e4]);
      expect(result).toBeTruthy();
    });

    test('arr is [3, 2, 1]', () => {
      const result = isAscendingArr([3, 2, 1]);
      expect(result).not.toBeTruthy();
    });

    test('arr is [1, 2, 3, 1]', () => {
      const result = isAscendingArr([1, 2, 3, 1]);
      expect(result).not.toBeTruthy();
    });

    test('arr is 1, 2e3, 2e2]', () => {
      const result = isAscendingArr([1, 2e3, 2e2]);
      expect(result).not.toBeTruthy();
    });

    test('arr is [1, null, 3]', () => {
      const result = isAscendingArr([1, null, 3]);
      expect(result).not.toBeTruthy();
    });

    test('arr is [1, undefined, 3]', () => {
      const result = isAscendingArr([1, undefined, 3]);
      expect(result).not.toBeTruthy();
    });

  });
});
