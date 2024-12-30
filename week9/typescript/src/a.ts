const sum = (a: number, b: number): number => {
    return a + b;
};

const isLegal = (age: number): boolean => {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const runAfter1S = (fn: () => void) => setTimeout(fn, 1000);

runAfter1S(() => {
    console.log("Hi there");
});

const value = sum(1, 5);
console.log(value);
console.log(isLegal(20));