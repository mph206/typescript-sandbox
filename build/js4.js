"use strict";
/* JS3 builds on the previous challenges and adds the use of Arrays */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkColour = exports.mergeArrays = void 0;
/**
 * A function that will take two array arguments.
 * The function will combine both arrays together into a single array and return it.
 *
 * @param {array} list1 - An array e.g. ["red", "blue"]
 * @param {array} list2 - An array e.g ["hello", "goodbye"]
 * @return {array} A merged array
 */
exports.mergeArrays = function (list1, list2) {
    var mergedLists = list1.concat(list2);
    return mergedLists;
};
/**
 * A function that will take two arguments: an array of colors and an index.
 * The function will test whether the item at index is not a pre-approved colour (red, green, blue).
 * If the colour at the index is not pre-approved, the colour will be deleted.
 * This should not mutate the provided array.
 *
 * @param {array} colours - An array of colours e.g. ["red", "blue"]
 * @param {number} index - Index of the array item to test
 * @return {array} A list of updated colours
 */
exports.checkColour = function (colours, index) {
    var selectedColour = colours[index];
    if (selectedColour === "red" || selectedColour == "green" || selectedColour == "blue")
        return colours;
    var newColours = __spreadArrays(colours);
    newColours.splice(index, 1);
    return newColours;
};
console.log('hi');
exports.default = challenge;
//# sourceMappingURL=js4.js.map