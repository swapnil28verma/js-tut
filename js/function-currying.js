// Function currying is essentially taking a function that takes 2 or more parameters, fixing one of them to a specific value, and then requiring only the second parameter by the developer
// Think the concept of default parameters, except the default values start from left to right, as opposed to the traditional right to left

// Bind demo
let multiply = function(x, y) {
    console.log(x * y);
}

// Closure demo
let multiplyAlt = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let demoCurry = function () {
    console.log("Using Bind");
    let multiplyByTwo = multiply.bind(this, 2);
    // 2 * 5 = 10
    multiplyByTwo(5);
    let multiplyByThree = multiply.bind(this, 3);
    // 3 * 5 = 15
    multiplyByThree(5);

    console.log("Using closures");
    let multiplyByTwoAlt = multiplyAlt(2);
    // 2 * 5 = 10
    multiplyByTwoAlt(5);
    let multiplyByThreeAlt = multiplyAlt(3);
    // 3 * 5 = 15
    multiplyByThreeAlt(5);
}

