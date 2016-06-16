type Foo = { type: 'foo' , foo: string };
type Bar = { type: 'bar' , bar: string };
type MyType = Foo | Bar;

export function test(t: MyType) {
  if (t.type === 'foo') {
    // TypeScript can't infer, that t is of type Foo here
    console.log(t.foo); // error, but should not be
  }
}
