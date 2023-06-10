// Remove Blanks

function removeBlanks(str) {
    let result = "";                            // sets empty string to store our new string
    for (let i = 0; i < str.length; i++) {      

    if (str[i] !== " ") {                // if string is not a space, it will be added to our new string
        result += str[i];
    }
}

return result;
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));




// Get Digits

function getDigits(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(Number(str[i]))) {           //if the character is a digit, it gets concatreated to the result
        result += str[i];                          // also returns it as a number
        }
    }

    return Number(result);
}

console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));




// Acronyms

function acronym(str) {
    let words = str.split(" ");             // splits string into an array of words
    let result = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
        result += words[i][0].toUpperCase();            // adds the first letter of each word to the result
        }                                               // and makes it uppercase
    }

    return result;
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night Live!"));




// Count Non-Spaces

function countNonSpaces(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {                   // if the character is not a space, it adds to the count
        count++;
        }
    }

    return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));
console.log(countNonSpaces("Super cali fragilistic expialidocious"));



// Remove Shorter Strings

function removeShorterStrings(arr, num) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= num) {             // if the string is longer than the number, 
        result.push(arr[i]);                    // it gets pushed to the new array
        }
    }

    return result;
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
console.log(removeShorterStrings(['My', 'favorite', 'snack', 'is', 'icecream', 'and', 'fudge'], 4));