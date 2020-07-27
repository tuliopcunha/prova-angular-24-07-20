import {Component, OnInit} from "@angular/core";


import {Router} from "@angular/router";
import {Person} from "./model/person.model";
import {PersonService} from "./person.service";

@Component({
    selector: "app-person",
    templateUrl: "./person.component.html",
    styleUrls: ["./person.component.scss"],
})
export class PersonComponent implements OnInit {

    persons: Person[] = [];

    columns = ['name', 'cpf', 'phone', 'email', 'cep', 'state', 'city', 'street', 'actions'];

    constructor(
        private router: Router,
        private personService: PersonService
    ) {
    }

    ngOnInit(): void {
        if (!this.personService.get() || !this.personService.getPersons().length) this.personService.populateTable();
        this.persons = this.personService.getPersons();
    }

    /**
     * Redireciona para a tela de inserção de pessoas
     */
    addPerson() {
        this.router.navigate(["/person/create"]);
    }

    /**
     * Redireciona para a tela de edição de pessoas
     * @param person Pessoa a ser editada
     */
    editPerson(person: Person) {
        this.router.navigate(["/person/" + person.cpf + "/edit"]);
    }

    /**
     * Faz a remoção de pessoa
     *
     * @param person Pessoa a ser Removida
     */
    deletePerson(person: Person) {
        this.personService.remove(person);
        this.persons = this.personService.getPersons();
    }

}