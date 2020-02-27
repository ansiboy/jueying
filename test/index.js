const assert = require("assert");
const puppeteer = require("puppeteer");

describe("test", function() {
    describe("test1", function() {
        it("xxx", async function() {
            assert.equal(5, 5);
            const browser = await puppeteer.launch();
            const page = await browser.newPage();

        })
    })
})