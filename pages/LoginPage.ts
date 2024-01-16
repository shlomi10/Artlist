// artlistPage.ts
import { Page, Locator } from 'playwright';
import { HelperBase } from './HelperBase';


export class LogInArtlistPage extends HelperBase {
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly submitBTN: Locator;

  constructor(page: Page) {
    super(page)
    this.emailField = page.locator("xpath=//input[@data-testid='email']")
    this.passwordField = page.locator("xpath=//input[@data-testid='password']")
    this.submitBTN = page.locator("button[type='submit']")
  }

  /**
   * This method fill out the form with user details
   * @param email - email
   * @param password - password 
   */
  async fillSignInForm(email: string, password: string) {
    await this.fillField(this.emailField, email)
    await this.fillField(this.passwordField, password)
  }

  async clickSubmitForm(): Promise<void> {
    await this.clickOnElem(this.submitBTN)
  }

  }