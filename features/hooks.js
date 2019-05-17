const { Before , After } = require('cucumber');
const puppeteer = require('puppeteer')
const scope = require('../features/support/scope');

Before(async function () {
    scope.browser = await puppeteer.launch({headless: false});
    scope.page = await scope.browser.newPage();
    await scope.page.goto('http://www.magazineluiza.com.br');
});

After(async function () {
    await delay(2000);
    await scope.browser.close();
});
