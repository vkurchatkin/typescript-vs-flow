/* @flow */

// exactly the same code as 3.ts

type Foo = { type: 'foo' , foo: string };
type Bar = { type: 'bar' , bar: string };
type MyType = Foo | Bar;



export function test(t: MyType) {
  if (t.type === 'foo') {
    // $ExpectError
    console.log(t.bar) // error
  }
}
