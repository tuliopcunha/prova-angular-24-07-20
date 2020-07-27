import {Component, OnInit} from "@angular/core";


import {ActivatedRoute, Router} from "@angular/router";
import {CepService} from "../../util/services/cep.service";
import {Person} from "../model/person.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../person.service";
import {finalize} from "rxjs/operators";
import {MessageError} from "../../util/messages/message-error";
import {KeyCodeEnumeration} from "../model/enumerations.model";

@Component({
    selector: "app-person-form",
    templateUrl: "./person-form.component.html",
    styleUrls: ["./person-form.component.scss"],
})
export class PersonFormComponent implements OnInit {

    selectedPerson: Person = new Person();
    form: FormGroup;
    loading;
    edit: boolean = false;

    constructor(
        public cep: CepService,
        public personService: PersonService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.buildReactiveForm();
        this.route.params.subscribe(res=>{
            if(res.cpf){
                this.edit = true;
                this.selectedPerson = this.personService.getPersons().find((person: Person) => person.cpf == res.cpf);
                if(!this.selectedPerson){
                    alert(MessageError.CPF_NOT_FOUND);
                    this.cancel();
                }
            }
        });

    }

    /**
     * Cria as validações do formulário
     */
    buildReactiveForm() {
        this.form = this.formBuilder.group({
            name: new FormControl('', [Validators.required]),
            cpf: new FormControl('', [Validators.required]),
            phone: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            cep: new FormControl('', [Validators.required]),
            state: new FormControl('', [Validators.required]),
            city: new FormControl('', [Validators.required]),
            street: new FormControl('', [Validators.required]),
        });
    }


    /**
     * Realiza a verificação e persistencia do objeto pessoa
     * @param person Pessoa a ser persistida
     */
    submit(person: Person) {
        if (!this.form.valid){
            alert(MessageError.REQUIRED_FIELDS)
        } else {
            this.personService.save(person);
            this.router.navigate(['/person']);
        }
    }


    /**
     * Faz a busca do cep da API 'viacep'
     *
     * @param event Evento de onchange do Input
     */
    changeCep(event) {
        var cep = event.target.value;
        if (cep.length == 8) {
            this.loading = true;
            this.cep.getCep(cep).pipe(finalize(() => this.loading = false)).subscribe((apiResponse: any) => {
                if (apiResponse.erro) {
                    alert(MessageError.CEP_NOT_FOUND)
                } else {
                    this.selectedPerson = {
                        ...this.selectedPerson,
                        cep: apiResponse.cep.replace('-', ''),
                        state: apiResponse.uf,
                        city: apiResponse.localidade,
                        street: apiResponse.logradouro
                    }
                }
            }, (error => {
                alert(MessageError.CEP_FIND_ERROR);
                console.error(error)
            }));
        }
    }

    /**
     * Retorna para a tela de listagem
     */
    cancel() {
        this.router.navigate(['/person']);
    }

    /**
     * Faz a validação do valor digitado verificando se é numero
     * @param event
     */
    onlyNumber(event){
        return event.keyCode === KeyCodeEnumeration.BACKSPACE ||
        event.keyCode === KeyCodeEnumeration.DELETE ? true : !isNaN(Number(event.key));
    }
}