import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CepService } from './util/services/cep.service';
import {AppRoutes} from './app.routes';
import {PersonComponent} from "./person/person.component";
import {PersonFormComponent} from "./person/form/person-form.component";
import {PersonService} from "./person/person.service";

@NgModule({
	declarations: [
		AppComponent, PersonComponent, PersonFormComponent
	],
	imports: [
		AppRoutes,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		MatTableModule,
		MatInputModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [CepService, PersonService],
	bootstrap: [AppComponent]
})
export class AppModule { }
