import {browser, protractor} from "protractor";
import {Util} from "../util.po";

describe('TesteHelpper - Inserir Pessoa', function () {

    let page: Util;

    beforeEach(() => {
        page = new Util();
        browser.get('/');
    });


    it('Inserir Pessoa - Cancelar', function () {
        page.clickInsert();
        page.clickCancel();
        expect(page.expectListPage()).toBe("OK");
    });

    it('Inserir Pessoa - Campos Obrigatorios', function () {
        page.clickInsert();
        page.clickSave();
        browser.switchTo().alert().accept();
        expect(page.expectButtonSavePage()).toBe("OK");
    });

    it('Inserir Pessoa - Sucesso ao Salvar', function () {
        page.clickInsert();
        page.fillAllFields();
        page.clickSave();
        expect(page.expectListPage()).toBe("OK");
    });

    it('Inserir Pessoa - Erro Cep', function () {
        page.clickInsert();
        page.fillAllFieldsErrorCep();
        browser.wait(protractor.ExpectedConditions.alertIsPresent(), 2000);
        browser.switchTo().alert().accept();
        expect(page.expectButtonSavePage()).toBe("OK");
    });

});