"use strict";

describe('TodoApp Login module test', function () {
    var url = 'http://localhost:3000';

    beforeAll(function () {
        browser.get(url);
    })

    it('first page should be login page check', function () {
        browser.getCurrentUrl().then(function (currentUrl) {
            var correctUrl = url + "/#!/login"
            expect(currentUrl).toEqual(correctUrl);
        });
    });

    it('username should show invalid input message', function () {
        var inputObj = element(by.name("userName"));
        var errorObj = element(by.id('error-username'));
        inputObj.sendKeys("Wah...");
        browser.sleep(1000);
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(1000);
        errorObj.isDisplayed().then(function (isVisible) {
            expect(isVisible).toEqual(true);
        });
        inputObj.clear().then(function () {
            inputObj.sendKeys("hiren@gmail.com");
        });
        browser.sleep(1000);
        errorObj.isDisplayed().then(function (isVisible) {
            expect(isVisible).toEqual(false);
        });
        browser.sleep(1000);
    });

    it('password should show invalid input message', function () {
        var inputObj = element(by.name("password"));
        var errorObj = element(by.id('error-password'));
        inputObj.click()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(1000); // have some time to look.
        errorObj.isDisplayed().then(function (isVisible) {
            expect(isVisible).toEqual(true);
        });
        inputObj.clear().then(function () {
            inputObj.sendKeys("angle");
        });
        browser.sleep(1000);
        errorObj.isDisplayed().then(function (isVisible) {
            expect(isVisible).toEqual(false);
        });
        browser.sleep(2000);
    });


});