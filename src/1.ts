function test1(obj: { foo: string }) {
  console.log(obj.foo);
}

test1(null); // oops
