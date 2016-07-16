/* @flow */

class Animal {}
class Cat extends Animal {
  meow() {}
}
class Dog {}

export function test(animals: Animal[]) {
  // $ExpectError
  animals.push(new Dog());
}

const cats: Cat[] = [];

// $ExpectError
test(cats);

cats.forEach(cat => cat.meow()); // runtime error
