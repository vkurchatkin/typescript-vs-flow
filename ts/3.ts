type Foo = { type: 'foo' , foo: string };
type Bar = { type: 'bar' , bar: string };
type MyType = Foo | Bar;


export function test(t: MyType) {
  if (t.type === 'foo') {
    console.log(t.bar) // error, as expected
  }
}
