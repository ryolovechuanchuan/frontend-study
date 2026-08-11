import { describe, expect, test } from 'vitest';
import { isEven } from './math';

describe('isEven', () => {
  test('2 should be even', () => {
    expect(isEven(2)).toBe(true);
  });

  test('3 should not be even', () => {
    expect(isEven(3)).toBe(false);
  });

  test('5 should not be even', () => {
    expect(isEven(5)).toBe(false);
  });
});

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Mary',
  },
];

export function getUser(id: number): User | undefined {
  return users.find((user) => user.id === id);
}

test('id = 1 should be found', () => {
  expect(getUser(1)).toEqual({ id: 1, name: 'John' });
});

test('id = 999 should be undefined', () => {
  expect(getUser(999)).toEqual(undefined);
});

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}
test('should throw when dividing by zero', () => {
  expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
});

test('20/4 should be 5', () => {
  expect(() => divide(20, 4)).toBe(5);
});
