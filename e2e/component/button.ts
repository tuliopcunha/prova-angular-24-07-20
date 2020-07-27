import * as Helper from "protractor-helper";

import {by, Locator} from "protractor";
import {UtilComponent} from "./util-component";

export class Button extends UtilComponent {

    static clickByLocator(locator: Locator) {
        Helper.click(this.getElementByLocator(locator));
    }

    static clickByText(text: string) {
        const css = 'button';
        this.clickByLocator(by.cssContainingText(css, text));
    }

    static clickByTextNotButton(text: string) {
        const css = 'p';
        this.clickByLocator(by.cssContainingText(css, text));
    }

}
