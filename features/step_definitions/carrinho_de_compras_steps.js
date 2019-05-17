const {Given, When, Then, fail,  setDefaultTimeout } = require('cucumber');
const expect = require('expect-puppeteer');
const assert = require('cucumber-assert');
const scope = require('../support/scope');


setDefaultTimeout(60 * 1000);

const LOGIN_SELECTOR = 'a.login-link';
const SEARCH_SELECTOR = 'input#inpHeaderSearch';
const ORDER_FILTER_SELECTOR = 'select';

Given('que estou {string}', async function (string) {
    

    switch (string) {
        case 'logado':
            console.log("ESTOU LOGADO");
            break;

        case 'deslogado':
            // let btn_login = await scope.page.$(LOGIN_SELECTOR);
            // await expect(btn_login).toMatch('Entre ou cadastre-se');
            console.log("ESTOU DESLOGADO");
            break;

        default:
            assert.equal(true, false, 'Devo estar logado ou deslogado').then();
            break;
      }
});

When('pesquiso por {string}', async function (string) {
    scope.desired_item = string;
    const input_search = await expect(scope.page).toMatchElement(SEARCH_SELECTOR);
    await input_search.type(string);
    await input_search.press('Enter');
});
       

When('ordeno por {string}', async function (string) {
    await scope.page.waitForSelector(ORDER_FILTER_SELECTOR);
    await scope.page.select(ORDER_FILTER_SELECTOR,string);

    // Desafio: Garantir que existe pelo menos um item "iPhone 7" na lista de resultados antes de passar para o próximo passo
});

When('adiciono o primeiro item da lista que tenha {string} no nome', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('verifico se o item foi adicionado na lista de compras', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});