/* @flow */

// exactly the same code as 5.ts

type A = {
  a: string | number
};

type B = {
  a: string
};

export function test(a: A) {
  a.a = 4;
}


const b: B = { a: 'foo' };
test(b); // error
b.a.toLowerCase();
