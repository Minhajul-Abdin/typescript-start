const locationD = [10, 20];
const player = [
    ["minhaj", "BD"]
];
const item = [7, 16];
function devide(a, b) {
    const bhagfall = Math.floor(a / b);
    const remainder = a % b;
    return [bhagfall, remainder];
}
const result = devide(7, 2);
console.log(result);
export {};
