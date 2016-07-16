/* @flow */

// almost, exactly the same code as 3.ts,
// but no unsafe cast

type Foo = { type: 'foo' , foo: string };
type Bar = { type: 'bar' , bar: string };
type MyType = Foo | Bar;



export function test(t: MyType) {
  if (t.type === 'foo') {
    // no need to keep things in sync manually
    // $ExpectError
    console.log(t.bar) // error
  }
}
