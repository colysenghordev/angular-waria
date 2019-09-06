import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PartenaireListeComponent } from './partenaires/partenaire-liste/partenaire-liste.component';
import { CreatePartenaireComponent } from './partenaires/create-partenaire/create-partenaire.component';
import { AdmingeneralComponent } from './admin/admingeneral/admingeneral.component';
import { PartenaireComponent } from './adminpartenaire/partenaire/partenaire.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'lister-partenaire', component: PartenaireListeComponent },
  { path: 'register', component: CreatePartenaireComponent },
  { path: 'admin-général', component: AdmingeneralComponent},
  { path: 'partenaire', component: PartenaireComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
