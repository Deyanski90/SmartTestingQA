"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
(0, cucumber_1.Before)(async function () {
    // @ts-ignore
    await this.launchBrowser();
});
(0, cucumber_1.After)(async function () {
    // @ts-ignore
    await this.closeBrowser();
});
