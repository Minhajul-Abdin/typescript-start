//Tuple
// A tuple in TypeScript is a fixed-length array where each position has a specific type.
type Point = [number, number];

const locationD: Point = [10,20];

//console.log(locationD);

type Player = [string, string];

const player: Player[] = [
    ["minhaj","BD"]
]

type OrderItem = readonly [number, number]; // by adding readonly we can't modify the structure

const item: OrderItem = [7,16];

//---------------------------------------------
//---------------------------------------------

type Division = [number, number];

function devide(a: number,b: number): Division{
    const bhagfall = Math.floor(a/b);
    const remainder = a % b; 
    return [bhagfall, remainder];
}

const result : Division = devide(7,2);
console.log(result)
