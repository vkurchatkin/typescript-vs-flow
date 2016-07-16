type Foo = { type: 'foo' , foo: string };
type Bar = { type: 'bar' , bar: string };
type MyType = Foo | Bar;

export function test(t: MyType) {
  if (t.type === 'foo') {
    // Typescript 2 knows, that t is Foo
    console.log(t.foo); // no error
  }
}
