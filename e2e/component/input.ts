import {UtilComponent} from "./util-component";
import {ElementFinder, Locator} from "protractor";
import * as Helper from "protractor-helper";


export class Input extends UtilComponent {

    static setInputWithTextByLocator(locator: Locator, value: string) {
        this.setInputWithTextByElement(this.getElementByLocator(locator), value);
    }

    static setInputWithTextByElement(elementFinder: ElementFinder, value: string) {
        this.scrollToByElement(elementFinder);
        Helper.clearFieldAndFillItWithText(elementFinder, value);
    }

}