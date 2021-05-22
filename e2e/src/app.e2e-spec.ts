import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import * as webdriver from 'selenium-webdriver';
import Entry = webdriver.logging.Entry;
import { BrowserLogs } from 'protractor-browser-logs';
const browserLogs = require('protractor-browser-logs');

function colored(entries: Entry[]) {
    const colors: any = { INFO: 35 /* magenta */, WARNING: 33 /* yellow */, SEVERE: 31 /* red */};
    entries.forEach((entry: Entry) => {
        console.log(`\u001b[${colors[entry.level.name] || 37}m${[entry.level.name, entry.message].join(': ')}\u001b[39m`);
    });
}

describe('Tour of Heroes application', () => {
  let page: AppPage;
  let logs: BrowserLogs;

  beforeEach(() => {
    page = new AppPage();
    logs = browserLogs(browser);
    logs = browserLogs(browser, { reporters: [] });
    logs = browserLogs(browser, { reporters: [ colored ] });
    logs.ignore(logs.DEBUG);
    logs.ignore(logs.INFO);
  });

  afterEach(function () {
    return logs.verify();
  })
  it('should display welcome message', async () => {
    page.navigateTo();
    const titleTex: string = await page.getTitleText();
    expect(titleTex).toEqual('ng-app-forms app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    /*const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));*/
    return logs.verify();
  });
});
