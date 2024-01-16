import { test } from '@playwright/test';
import { PageManager } from '../pages/pageManager';


 test.describe('Test suite login', () => {

  test.beforeEach(async ({ context, page}) => {
    await page.goto('https://artlist.io/');
  })

  test('navigate to login page', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.mainPage().clickSignIn();
  });

  test('login Test', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.mainPage().clickSignIn();
    await pm.pageLogin().fillSignInForm('test@itbl.info', 'Password1');
    await pm.pageLogin().clickSubmitForm();
  });

  test('Download Track Test', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.mainPage().clickSignIn();
    await pm.pageLogin().fillSignInForm('test@itbl.info', 'Password1');
    await pm.pageLogin().clickSubmitForm();
    await pm.mainPage().clickOnMusic();
    await pm.mainPage().downloadTrack();
  });

  });

  test.afterEach(async ({ context, page}) => {
    await page.close();
  })
