"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js4_1 = require("./js4");
var colours = ["violet", "green", "blue", "yellow", "red"];
var names = ["Liam", "Shea", "Matt", "Ollie"];
test("Merge two arrays together", function () {
    expect(js4_1.default.mergeArrays(colours, names)).toMatchObject(["violet", "green", "blue", "yellow", "red", "Liam", "Shea", "Matt", "Ollie"]);
    expect(js4_1.default.mergeArrays(names, colours)).toMatchObject(["Liam", "Shea", "Matt", "Ollie", "violet", "green", "blue", "yellow", "red"]);
});
test("Check various indices", function () {
    expect(js4_1.default.checkColour(colours, 0)).toMatchObject(["green", "blue", "yellow", "red"]);
    expect(js4_1.default.checkColour(colours, 1)).toMatchObject(["violet", "green", "blue", "yellow", "red"]);
    expect(js4_1.default.checkColour(colours, 2)).toMatchObject(["violet", "green", "blue", "yellow", "red"]);
    expect(js4_1.default.checkColour(colours, 3)).toMatchObject(["violet", "green", "blue", "red"]);
    expect(js4_1.default.checkColour(colours, 4)).toMatchObject(["violet", "green", "blue", "yellow", "red"]);
});
//# sourceMappingURL=js4.test.js.map