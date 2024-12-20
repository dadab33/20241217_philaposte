import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { AddressesComponent } from './pages/addresses/addresses.component';
import { AppComponent } from './app.component';
import { TemplateDrivenUserFormComponent } from './pages/template-driven-user-form/template-driven-user-form.component';
import { UserReactiveFormComponent } from './pages/user-reactive-form/user-reactive-form.component';

export const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'addresses',
        component: AddressesComponent
    },
    {
        path: 'template-form',
        component: TemplateDrivenUserFormComponent
    },
    {
        path: 'reactive-form',
        component: UserReactiveFormComponent
    },
    {
        path: '**',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];
