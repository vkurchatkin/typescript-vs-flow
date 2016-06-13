type MyType = { type: 'foo' , foo: string } | { type: 'bar' , bar: string };

export function test(t: MyType) {
  if (t.type === 'foo') {
    console.log(t.foo) // oops
  }
}
