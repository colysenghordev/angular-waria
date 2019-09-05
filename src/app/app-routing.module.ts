import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PartenaireListeComponent } from './partenaires/partenaire-liste/partenaire-liste.component';
import { CreatePartenaireComponent } from './partenaires/create-partenaire/create-partenaire.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: ''},
  { path: 'login', component: LoginComponent },
  { path: 'lister-partenaire', component: PartenaireListeComponent },
  { path: 'register', component: CreatePartenaireComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
