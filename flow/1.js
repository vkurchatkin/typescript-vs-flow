/* @flow */

// exactly the same code as 1.ts

export function test1(obj: { foo: string }) {
  console.log(obj.foo);
}

export function test2(num: number) {
  console.log(num);
}

test1(null); // error
test1(undefined); // error
test2(null); // error
test2(undefined); // error

export function test3(): number {
  return;  // error
}
