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
