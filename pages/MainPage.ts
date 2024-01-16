import { Page, Locator } from '@playwright/test';
import { HelperBase } from './HelperBase';


export class MainPage extends HelperBase{
  readonly signInIcon: Locator;
  readonly musicLink: Locator;
  readonly downloadLocators: Locator
  readonly mp3Locator: Locator

  constructor(page: Page) {
    super(page)
    this.signInIcon = page.locator("div.relative.flex.h-full")
    this.musicLink = page.locator('ul.items-center a[href="/royalty-free-music"]')
    this.downloadLocators = page.locator("button[aria-label='Download']")
    this.mp3Locator = page.locator("xpath=//button[@aria-label='mp3 download']")
  }

  async clickSignIn() {
    await this.clickOnElem(this.signInIcon)
  }

  async clickOnMusic() {
    await this.clickOnElem(this.musicLink)
  }

  async downloadTrack() {
    await this.downloadLocators.first().click()
    await this.mp3Locator.click()
  }

  // async isFileDownloaded(trackName: string): Promise<boolean> {
  //   // Implement logic to check if the file is downloaded
  //   // Example: Assuming downloaded files are saved in a specific directory
  //   const downloadPath = '/path/to/download/directory'; // Change this to your actual download path
  //   const downloadedFilePath = `${downloadPath}/${trackName}.mp3`;

  //   // Check if the file exists
  //   const fileExists = await this.page.evaluate((filePath) => {
  //     const fs = require('fs');
  //     return fs.existsSync(filePath);
  //   }, downloadedFilePath);

  //   return fileExists;
  // }

  // // Add other methods for interacting with the artlist.io page as needed
}