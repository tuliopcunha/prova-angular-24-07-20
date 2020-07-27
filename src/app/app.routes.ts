import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PersonComponent} from "./person/person.component";
import {PersonFormComponent} from "./person/form/person-form.component";

export const routes: Routes = [
    {path: 'person', component: PersonComponent},
    {path: 'person/create', component: PersonFormComponent},
    {path: 'person/:cpf/edit', component: PersonFormComponent},
    {path: '**', redirectTo: 'person'}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
