import {Util} from "../util.po";
import {browser} from "protractor";

describe('TesteHelpper - Listar Pessoa', function () {

    let page: Util;

    beforeEach(() => {
        page = new Util();
        browser.get('/');
    });

    it('Listar Pessoa - Tabela Existente', function () {
        expect(page.expectListPage()).toBe("OK");
    });
});