const sumAll = function (num1, num2) { // put arguments
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (num1 > num2) { // if num1 is greater than num2 
        //swap/assign num1 to num2 using temp
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }
    let sum = 0; // create a variable to hold the final sum
    for (let i = num1; i < num2 + 1; i++) { // loop through the given numbers
        sum += i; // on each iteration add the number to the sum
    }
    return sum; // return the sum after finishing the loop
};

// Do not edit below this line
module.exports = sumAll;
