import { Routes } from '@angular/router';
const AboutComponent=()=>import('./public/components/about/about.component').then(m=>m.AboutComponent);
import { HomeComponent }  from './public/components/home/home.component';
import { PageNotFoundComponent } from './public/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent} ,
    {path:'about',loadComponent: AboutComponent}  ,
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'**', component: PageNotFoundComponent}
];  
