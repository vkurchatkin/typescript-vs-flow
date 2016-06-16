type A = { foo: () => void };
type B = { foo?: () => void };


const x: A = { foo: () => {} };

delete x.foo
