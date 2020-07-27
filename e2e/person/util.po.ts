import {Button} from "../component/button";
import {UtilComponent} from "../component/util-component";
import {by} from "protractor";
import {Input} from "../component/input";

export class Util {
    clickInsert() {
        Button.clickByText("Incluir uma nova pessoa");
    }

    clickCancel() {
        Button.clickByText("Cancelar");
    }

    clickEdit() {
        Button.clickByTextNotButton("Editar");
    }

    clickDelete() {
        Button.clickByTextNotButton("Remover");
    }

    clickSave() {
        Button.clickByText("Salvar");
    }

    expectListPage() {
        let promises = [];
        promises.push(UtilComponent.isPresentByLocator(by.cssContainingText("table", "Nome")));
        return Promise.all(promises).then(resultados => {
            if (!resultados[0]) {
                return "Não"
            }
            return 'OK';
        });
    }

    expectButtonSavePage() {
        let promises = [];
        promises.push(UtilComponent.isPresentByLocator(by.cssContainingText("button", "Salvar")));
        return Promise.all(promises).then(resultados => {
            if (!resultados[0]) {
                return "Não"
            }
            return 'OK';
        });
    }

    fillAllFields() {
        Input.setInputWithTextByLocator(by.css('input[id="name"]'), 'Nome Teste');
        Input.setInputWithTextByLocator(by.css('input[id="cpf"]'), '12345678912');
        Input.setInputWithTextByLocator(by.css('input[id="phone"]'), '37999999999');
        Input.setInputWithTextByLocator(by.css('input[id="email"]'), 'teste@email.com');
        Input.setInputWithTextByLocator(by.css('input[id="cep"]'), '35574540');
    }


    fillAllFieldsErrorCep() {
        Input.setInputWithTextByLocator(by.css('input[id="name"]'), 'Nome Teste');
        Input.setInputWithTextByLocator(by.css('input[id="cpf"]'), '12345678912');
        Input.setInputWithTextByLocator(by.css('input[id="phone"]'), '37999999999');
        Input.setInputWithTextByLocator(by.css('input[id="email"]'), 'teste@email.com');
        Input.setInputWithTextByLocator(by.css('input[id="cep"]'), '99999999');
    }
}