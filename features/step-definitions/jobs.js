/* global browser */
const expect = require('jest-matchers');

const { Given, When, Then } = require('cucumber');

Given('Job seeker is on a bitgrip home page', () => {
    browser.setViewportSize({
        width: 1200,
        height: 900
    });
    browser.url('./');
});

When('click on jobs', () => {
    if (browser.isVisible('.cookieBanner__cta button')) {
        console.log('/////////// cookie is visible');
        browser.click('.cookieBanner__cta button');
    }

    browser.pause(1000);
    browser.click('.main-nav .main-nav__list--item a[href="/jobs/"]');
    browser.pause(2000);
});

Then('sees the jobs page', () => {
    expect(browser.getTitle()).toBe('Jobs - bitgrip GmbH');
});

Then('open positions are shown', () => {
    expect(browser.isExisting('#maincontent .teaser-grid .teaser')).toBeTruthy();
});


