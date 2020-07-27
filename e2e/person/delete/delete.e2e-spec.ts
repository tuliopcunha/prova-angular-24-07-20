import {browser} from "protractor";
import {Util} from "../util.po";

describe('TesteHelpper - Deletar Pessoa', function () {

    let page: Util;
    beforeEach(() => {
        page = new Util();
        browser.get('/');
    });

    it('Deletar Pessoa - Deletar Sucesso', function () {
        page.clickDelete();
        expect(page.expectListPage()).toBe("OK");
    });

});