
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

export function test(v: Direction) {
}

// Typescript allows to pass any number instead of enum value
test(100);
