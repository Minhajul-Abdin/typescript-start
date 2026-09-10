const fruits: string[] = ['apple','banana','cherry'];
const numbers: number[] = [5,20,3,6,4];

function getfirst<T>(items: T[]): T{
    return items[0];
}

const firstFruit = getfirst(fruits);
const firstNum = getfirst(numbers);

console.log(firstFruit);
console.log(firstNum);