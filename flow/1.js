/* @flow */

// exactly the same code as 1.ts

export function test1(obj: { foo: string }) {
  console.log(obj.foo);
}

export function test2(num: number) {
  console.log(num);
}

// $ExpectError
test1(null); // error

// $ExpectError
test1(undefined); // error

// $ExpectError
test2(null); // error

// $ExpectError
test2(undefined); // error

export function test3(): number {
  // $ExpectError
  return;  // error
}
