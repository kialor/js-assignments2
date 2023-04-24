let numbers1 = [1, 2, 3, 4];
let numbers2 = [5, 6, 7, 8];
let numbers =[...numbers1, ...numbers2 ];
// console.log(numbers);

const square = (num) => {
    let numSquared = num*num;
    return numSquared;
}
// console.log(square(9));

const squares = numbers.map(square);
// console.log(squares);

const isEven = (num) => {
    if (num%2 === 0) {
        return true
    } else {
        return false
    };
};
// console.log(isEven(2));

const evenSquares = squares.filter(isEven);
// console.log(evenSquares);

let [ firstEvenSquare, secondEvenSquare ] = evenSquares;
// console.log(firstEvenSquare);
// console.log(secondEvenSquare);

console.log(`Taking these numbers, ${numbers} we can square each to get results of ${squares}. ${evenSquares} are all the numbers that are even in this list. ${firstEvenSquare} and ${secondEvenSquare} are the extracted even square numbers.`)