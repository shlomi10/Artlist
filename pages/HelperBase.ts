import { Page, Locator } from '@playwright/test';


export class HelperBase{

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async fillField(field: Locator, text:string){
        await field.fill(text)
    }

    async clickOnElem(elem: Locator){
        await elem.click()
    }
}