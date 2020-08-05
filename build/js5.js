"use strict";
/* This challenge builds on the previous challenges and adds the use of loops */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPalindromes = exports.palindromeChecker = exports.replaceColours = void 0;
/**
 * The function that will take an array of colors.
 * It will test whether each item in the array is not a pre-approved colour (red, green, blue).
 * for each item in the array that does not match the pre-approved colours, it will be replaced with "red"
 * This should not mutate the provided array.
 *
 * @param {array} colours - An array of colours e.g. ["red", "yellow"]
 * @return {array} A list of updated colours e.g. ["red", "red"]
 */
exports.replaceColours = function (colours) {
    var newColours = __spreadArrays(colours);
    for (var i = 0; i < colours.length; i++) {
        if (colours[i] != "red" && colours[i] != "green" && colours[i] != "blue") {
            newColours[i] = "red";
        }
    }
    return newColours;
};
/**
* A function that takes a string and checks to see if it is a palindrome (noon, anna, madam are all palindromes)
* returns true or false
*
* @param {string} word - the word to be checked
* @returns {boolean} true if the word is a palindrome, false otherwise
*/
exports.palindromeChecker = function (word) {
    var reverseWord = word.split("").reverse().join("");
    return reverseWord === word;
};
/**
* A function that takes in an array of words, checks if each word is a palindrome and returns
* a new array containing only the words that are palindromes
*
* @param {array} words - the words to be checked
* @returns {array} List of all the words that are palindromes
*/
exports.getAllPalindromes = function (words) {
    var palindromes = [];
    for (var i = 0; i < words.length; i++) {
        if (exports.palindromeChecker(words[i])) {
            palindromes.push(words[i]);
        }
    }
    return palindromes;
};
//# sourceMappingURL=js5.js.map