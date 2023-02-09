/**
 * @jest-environment jsdom
 */

// const { expect } = require("@jest/globals");
// const { default: test } = require("node:test");
// const { describe } = require("yargs");

// const { beforeAll } = require("@jest/globals");


const { game } = require("../game");

// Note - the following codes is same for all HMTL code being loaded to the dom.
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices exists", () => {
        expect("choices" in game).toBe(true);
    });
});