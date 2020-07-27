import {browser, protractor} from "protractor";
import {Util} from "../util.po";

describe('TesteHelpper - Editar Pessoa', function () {

    let page: Util;

    beforeEach(() => {
        page = new Util();
        browser.get('/');
    });


    it('Editar Pessoa - Salvar Sucesso', function () {
        page.clickEdit();
        page.clickSave();
        expect(page.expectListPage()).toBe("OK");
    });

    it('Editar Pessoa - Cancelar', function () {
        page.clickEdit();
        page.clickCancel();
        expect(page.expectListPage()).toBe("OK");
    });

});