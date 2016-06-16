type A = {
  a: string | number
};

type B = {
  a: string
};

export function test(a: A) {
  a.a = 4;
}


const b: B = { a: 'foo' };
test(b); // TypeScript allows to do this, but it's unsafe
b.a.toLowerCase(); // Runtime error
