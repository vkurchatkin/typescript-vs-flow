function test(obj: { foo: string }) {
  console.log(obj.foo);
}

test(null); // oops
