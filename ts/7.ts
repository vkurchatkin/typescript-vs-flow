class Animal {}
class Cat extends Animal {
  meow() {}
}
class Dog {}

export function test(animals: Animal[]) {
  animals.push(new Dog());
}

const cats: Cat[] = [];

test(cats);

cats.forEach(cat => cat.meow()); // runtime error
