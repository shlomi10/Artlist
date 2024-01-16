import { Page, BrowserContext, Locator } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { LogInArtlistPage } from '../pages/LoginPage';

export class PageManager{

    private readonly page: Page
    private readonly loginPage: LogInArtlistPage;
    private readonly mainArtlistPage: MainPage;

    constructor(page: Page){
        this.page = page
        this.loginPage = new LogInArtlistPage(this.page);
        this.mainArtlistPage = new MainPage(this.page);
    }

    pageLogin(){
        return this.loginPage
    }

    mainPage(){
        return this.mainArtlistPage
    }

}