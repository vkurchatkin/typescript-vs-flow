/* @flow */

function print(x: number | string) {
  console.log(x);
}

export function test(foobar: boolean) {
  let x = 100;
  // x is an open type, so you can expand it
  // x is number here
  if (foobar) {
    x = 'Invalid'; // this is ok
    // x is xtring here
  }

  // x is number | string here
  print(x); // no error
}
