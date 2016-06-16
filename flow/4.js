/* @flow */

// Flow doesn't have special syntax for enums
const Up = 1;
const Down = 2;
const Left = 3;
const Right = 4;

type Direction =
  | typeof Up
  | typeof Down
  | typeof Left
  | typeof Right
;

export function test(v: Direction) {
}

test(100); // error
