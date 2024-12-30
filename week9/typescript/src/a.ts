// const sum = (a: number, b: number): number => {
//     return a + b;
// };

// // const isLegal = (age: number): boolean => {
// //     if (age >= 18) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // };

// const runAfter1S = (fn: () => void) => setTimeout(fn, 1000);

// runAfter1S(() => {
//     console.log("Hi there");
// });

// const value = sum(1, 5);
// console.log(value);
// // console.log(isLegal(20));

// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
//     email?: string;
// }

// const isLegal = (user: User) => {
//     if (user.age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const Harshit = isLegal({
//     firstName: "Harshit",
//     lastName: "Batra",
//     age: 17,
// })

// console.log(Harshit);

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const emp = new Employee("Harshit", 21);
emp.greet("Hello");

type User = {
    firstName: string;
    lastName: string;
    age: number;
}

const greet = (id: number | string) => {
    console.log(id);
}

const maxValue = (arr: number[]) => {
    let max = 0;
    for (let i=0; i<= arr.length; i++) {
        if(arr[i] > max) {
            max= arr[i];
        }
    }
    return max;
}

console.log(maxValue([1,2,3,4,5]));

//ENUMS

enum Direction {
    Up,
    Down,
    Left,
    Right
}

const doSomething = (dir: Direction) => {
    if (dir == Direction.Up) {
        console.log("Going Up");
    }
}

doSomething(Direction.Left);