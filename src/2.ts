type MyType = { type: 'foo' , foo: string } | { type: 'bar' , bar: string };

function test2(t: MyType) {
  if (t.type === 'foo') {
    console.log(t.foo) // oops
  }
}
