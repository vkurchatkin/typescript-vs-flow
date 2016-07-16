export function test1(obj: { foo: string }) {
  console.log(obj.foo);
}

export function test2(num: number) {
  console.log(num);
}

// Typescript 2 with --strictNullChecks catches these errors
test1(null);
test1(undefined);
test2(null);
test2(undefined);


export function test3(): number {
  return;
}
