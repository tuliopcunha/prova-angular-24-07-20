import {browser, ElementFinder, Locator} from 'protractor';

import * as Helper from 'protractor-helper';

export class UtilComponent {

    static getElementByLocator(locator: Locator) {
        return browser.element(locator);
    }

    static isPresentByLocator(locator: Locator) {
        return this.getElementByLocator(locator).isPresent();
    }

    static clickByLocator(locator: Locator) {
        Helper.click(this.getElementByLocator(locator));
    }

    static scrollToByElement(elementFinder: ElementFinder) {
        Helper.scrollToElement(elementFinder);
    }

}
