const reverseString = function(str) {
    let splitString = str.split("");
    let reverseString = splitString.reverse();
    let joinReversedString = reverseString.join("");
    return joinReversedString;


};
console.log(reverseString("hello"))

// Do not edit below this line
module.exports = reverseString;
