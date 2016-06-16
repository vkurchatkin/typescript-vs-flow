type Foo = { type: 'foo' , foo: string };
type Bar = { type: 'bar' , bar: string };
type MyType = Foo | Bar;


// to fix 2.ts, you need to cast value manually,
// but it is unsafe

export function test(t: MyType) {
  if (t.type === 'foo') {
    // check and cast should be in kept sync
    // we check for foo but cast to Bar by mistake
    console.log((<Bar>t).bar) // should be an error
  }
}


// Typescript has an intersting feature, called
// user-defined type guards to handle such cases.
// By type guards themselves are not validate in any
// way.

function isNumber(t: number | string): t is number {
    return typeof t === 'string'; // should be an error
}
