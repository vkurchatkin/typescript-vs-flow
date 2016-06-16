export function test1(obj: { foo: string }) {
  console.log(obj.foo);
}

export function test2(num: number) {
  console.log(num);
}

// Typescript allows passing null and undefined
// instead of both object and primitive types
test1(null);
test1(undefined);
test2(null);
test2(undefined);

// you can return undefined as well, but at least it
// checks that you have `return` statement
export function test3(): number {
  return;
}
