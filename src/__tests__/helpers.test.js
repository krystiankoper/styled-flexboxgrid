import { isInteger, calculatePercentageGridValue } from '../helpers';
import config from '../config';

describe('isInteger()', () => {
  it('returns true if a value is an integer', () => {
    expect(isInteger(1)).toEqual(true);
  });
  it('returns false if a value is a string', () => {
    expect(isInteger('test')).toEqual(false);
  });
  it('returns false if a value is a float', () => {
    expect(isInteger(1.5)).toEqual(false);
  });
  it('returns false if a value is a NaN', () => {
    expect(isInteger(NaN)).toEqual(false);
  });
  it('returns false if a value is a undefined', () => {
    expect(isInteger(undefined)).toEqual(false);
  });
});

describe('calculatePercentageGridValue()', () => {
  it('returns value as a string with percentage character', () => {
    expect(calculatePercentageGridValue(1, config.gridSize)).toEqual(
      '8.333333333333334%'
    );
  });
});
