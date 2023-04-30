function sum(...num) {
    return num.reduce((valAcc, valCorr) => valAcc + valCorr);
}

console.log(sum(1, 2, 3, 4, 5));