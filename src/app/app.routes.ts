import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { AboutComponent } from './components/about/about.component';
import { PeopleComponent } from './components/people/people.component';
import { LoginComponent } from './components/login/login.component';
import { AddPeopleComponent } from './components/add-people/add-people.component';
import { CanActivateService } from './services/can-activate.service';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'peoples', component: PeoplesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'people/:id', component: PeopleComponent},
    {path: 'login', component: LoginComponent},
    {path: 'addPeople', component: AddPeopleComponent},
    {path: '', pathMatch: 'full', redirectTo: 'login'}
]

export const app_routing = RouterModule.forRoot(APP_ROUTES, {useHash: true})