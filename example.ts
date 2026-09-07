function divide(a: number,b: number): number{
    if(b == 0){
        throw new Error("division is not possible");
    }
    return a/b;
}

console.log(divide(6,2));