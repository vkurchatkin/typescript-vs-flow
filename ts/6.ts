function print(x: number | string) {
  console.log(x);
}

export function test(foobar: boolean) {
  let x = 100; // Typescript immediately thinks that x is number

  if (foobar) {
    x = 'Invalid'; // error
  }

  print(x);
}
