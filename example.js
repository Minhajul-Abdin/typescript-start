function divide(a, b) {
    if (b == 0) {
        throw new Error("division is not possible");
    }
    return a / b;
}
console.log(divide(6, 2));
// if the function isn't returning anything then the type will be void
function milti(a, b) {
    if (b == 0) {
        throw new Error("division is not possible");
    }
    const total = a + b;
}
console.log(milti(6, 2)); //nothing is being returned so the output is undifined
export {};
