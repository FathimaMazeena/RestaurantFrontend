const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Navbar Navigation Tests', function () {
    this.timeout(30000);

    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('should navigate to Home', async function () {
        await driver.get('http://localhost:3000');
        let homeLink = await driver.findElement(By.linkText('Home'));
        await homeLink.click();
        await driver.wait(until.urlIs('http://localhost:3000/'), 5000);
        let currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'http://localhost:3000/');

    });

    it('should navigate to Menu', async function () {
        let menuLink = await driver.findElement(By.linkText('Menu'));
        await menuLink.click();
        await driver.wait(until.urlIs('http://localhost:3000/menu'), 5000);
        let currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'http://localhost:3000/menu');

    });

    it('should navigate to About Us', async function () {
        let aboutUsLink = await driver.findElement(By.linkText('About Us'));
        await aboutUsLink.click();
        await driver.wait(until.urlIs('http://localhost:3000/about-us'), 5000);
        let currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'http://localhost:3000/about-us');
        
    });

    it('should navigate to Login', async function () {
        let loginLink = await driver.findElement(By.linkText('Login'));
        await loginLink.click();
        await driver.wait(until.urlIs('http://localhost:3000/login'), 5000);
        let currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'http://localhost:3000/login');

    });

    it('should navigate to Contact', async function () {
        let contactLink = await driver.findElement(By.linkText('Contact'));
        await contactLink.click();
        await driver.wait(until.urlIs('http://localhost:3000/contact'), 5000);
        let currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'http://localhost:3000/contact');

    });


});
